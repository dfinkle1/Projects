from flask import Flask,render_template,redirect,flash,session
from models import db, connect_db,bcrypt,User,Feedback
from forms import UserForm, LoginForm, FeedbackForm,DeleteForm

app = Flask(__name__)
app.config['SECRET_KEY'] ='thisishowwedo'
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///feedback"
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.route('/')
def home():
    return redirect('/register')

@app.route('/register',methods=['GET','POST'])
def register_user():
    form = UserForm()
    if "username" in session:
        return redirect(f"/users/{session['username']}")
    if form.validate_on_submit():
        username= form.username.data
        password = form.password.data
        first_name = form.first_name.data
        last_name = form.last_name.data
        email = form.email.data

        user = User.register(username,password,first_name,last_name,email)

        db.session.commit()
        session['username'] = user.username
        return redirect(f"/users/{user.username}")
    return render_template('register.html',form=form)

@app.route('/login',methods=['GET','POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        username= form.username.data
        password= form.password.data
        
        user = User.authenticate(username,password)
        if user: flash(f"Welcome Back, {user.username}!","primary")
        session['username'] = user.username
        return redirect(f"/users/{session['username']}")
    else:
        form.username.errors= ['Invalid username/password.']

    return render_template('login.html',form = form)

@app.route('/logout')
def logout():
    session.pop("username")
    flash('Goodbye!','info')
    return redirect('/login')

@app.route('/users/<username>')
def showuser(username):
    
    if "username" not in session or username != session['username']:
        flash('Please Login','danger')
        return redirect('/login')
    
    user = User.query.get(username)
    form= DeleteForm()
    return render_template('users/show.html', user=user,form=form)


@app.route('/users/<username>/delete', methods=['POST'])
def delete_user(username):
    if 'username' not in session or username != session['username']:
        return redirect('/')
    user = User.query.get(username)
    db.session.delete(user)
    db.session.commit()
    session.pop('username')
    return redirect('/login')

@app.route('/users/<username>/feedback/add', methods=['POST','GET'])
def add_feedback(username):
    form = FeedbackForm()
    if 'username' not in session or username != session['username']:
        return redirect('/')
    if form.validate_on_submit():
        title = form.title.data
        content= form.content.data
        feedback = Feedback(title=title,content=content,username=username)
        db.session.add(feedback)
        db.session.commit()
        return redirect(f'/users/{username}')
    return render_template('feedback/add.html',form = form)

@app.route('/feedback/<int:feedback>/update', methods=['GET','POST'])
def updated_feedback(feedback_id):
    feedback = Feedback.query.get(feedback_id)
    if 'username' not in session or feedback.username != session['username']:
        return redirect('/')
    form = FeedbackForm(obj=feedback)
    if form.validate_on_submit():
        feedback.title = form.title.data
        feedback.content = form.content.data
        db.session.commit()
        return redirect(f'/users/{feedback.username}')
    return render_template('/feedback/edit.html',form=form,feedback=feedback)

@app.route("/feedback/<int:feedback_id>/delete", methods=["POST"])
def delete_feedback(feedback_id):
    """Delete feedback."""

    feedback = Feedback.query.get(feedback_id)
    if "username" not in session or feedback.username != session['username']:
        return redirect('/')

    form = DeleteForm()

    if form.validate_on_submit():
        db.session.delete(feedback)
        db.session.commit()

    return redirect(f"/users/{feedback.username}")


@app.route('/secret')
def secret():
    return render_template('secret.html')

