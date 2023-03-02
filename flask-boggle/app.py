from boggle import Boggle
from flask import Flask, render_template, session, request, jsonify

boggle_game = Boggle()
cow = boggle_game.make_board

app = Flask(__name__)
app.config['SECRET_KEY'] = 'chunkymonkey221'

@app.route('/')
def home():
    "Show board"
    board = boggle_game.make_board()
    session['board'] = board
    highscore = session.get('highscore',0)
    nplays = session.get('nplays',0)
    return render_template('home.html',board = board, highscore = highscore, nplays=nplays)

@app.route('/check-word')
def check_word():
    """check if word is in the dictionary"""
    word = request.args['word']
    board = session['board']
    response = boggle_game.check_valid_word(board,word)
    return jsonify({'result': response})

@app.route("/post-score", methods=["POST"])
def post_score():
    """Receive score, update nplays, update high score if appropriate."""

    score = request.json["score"]
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    session['nplays'] = nplays + 1
    session['highscore'] = max(score, highscore)

    return jsonify(brokeRecord=score > highscore)