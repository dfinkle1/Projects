from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()

def connect_db(app):
    """Connect to Database"""
    db.app = app
    db.init_app(app)

class User(db.Model):
    __tablename__ = 'users'
    username = db.Column(db.String(20), nullable=False, unique=True,primary_key=True)
    password = db.Column(db.String, nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    
    feedback= db.relationship('Feedback', backref='user')

    @classmethod
    def register(cls,username,password,first_name,last_name,email):
        """register user w/hashed password & return user"""
        hashed = bcrypt.generate_password_hash(password)
        # turn bytestring into normal unicode utf8 string
        hashed_utf8  = hashed.decode('utf8')
        user = cls(
            username=username,
            password=hashed_utf8,
            first_name = first_name,
            last_name=last_name,
            email=email
        )
        db.session.add(user)
        return user
    @classmethod
    def authenticate(cls,username,pwd):
        """Validate that user exists & password is correct"""

        u = User.query.filter_by(username=username).first()
        if u and bcrypt.check_password_hash(u.password,pwd):
            return u
        else:
            return False

class Feedback(db.Model):
    __tablename__ = 'feedback'

    id = db.Column(db.Integer,nullable=False, autoincrement=True,primary_key=True)
    title = db.Column(db.String(100),nullable=False)
    content = db.Column(db.Text,nullable=False)
    username = db.Column(db.String, db.ForeignKey('users.username'),nullable=False)
