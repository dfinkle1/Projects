from flask import Flask, render_template, request, redirect, flash, jsonify, session
from surveys import satisfaction_survey as survey
# from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

RESPONSES_KEY = 'responses'
app.config['SECRET_KEY'] = "secretlol"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

# debug = DebugToolbarExtension(app)
# value = request.get('quest')

@app.route('/')
def home():
    return render_template('home.html', survey = survey)

@app.route('/begin', methods=['POST'])
def questions():
    session[RESPONSES_KEY] = []
    return redirect('/questions/0')

@app.route('/questions/<int:qid>')
def test(qid):
    responses = session.get(RESPONSES_KEY)
    if(responses is None):
        #trying to access the question page too soon
        return redirect('/')
    if(len(responses) == len(survey.questions)):
        #they've answered all the questions
        redirect('/complete')
    if(len(responses) != qid):
        flash(f'INVALID QUESTION ID: {qid}.')
        return redirect(f'/questions/{len(responses)}')
    question = survey.questions[qid]
    return render_template(
        'question.html', question_num=qid, question=question)

@app.route('/answer', methods=['POST'])
def getData():
    #get the response choice
    choice = request.form['answer']
    # add this reponse to the session
    responses = session[RESPONSES_KEY]
    responses.append(choice)
    session[RESPONSES_KEY]= responses
    if(len(responses) == len(survey.questions)):
        #they've answered all questions
        return redirect('complete')
    else:
        return redirect(f'/questions/{len(responses)}')
