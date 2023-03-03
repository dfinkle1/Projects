"""Models for Cupcake app."""
from flask_sqlalchemy import SQLAlchemy

GENERIC_IMAGE = "https://tinyurl.com/demo-cupcake"

db = SQLAlchemy()

def connect_db(app):
    """Connect this database to provided Flask app.

    You should call this in your Flask app.
    """

    db.app = app
    db.init_app(app)

class Cupcake(db.Model):
    """Different Cupcakes"""

    __tablename__ = 'cupcakes'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    flavor = db.Column(db.Text, nullable= False)
    size = db.Column(db.Text, nullable= False)
    rating = db.Column(db.Float, nullable= False)
    image = db.Column(db.Text, nullable= False, default= GENERIC_IMAGE)

    def serialize(self):
        return {
            'id':self.id,
            'flavor':self.flavor,
            'size': self.size,
            'rating': self.rating,
            'image': self.image
        }
    def __repr__(self):
        return f'<Cupcakes {self.id} flavor ={self.flavor} size={self.size} rating={self.rating}'