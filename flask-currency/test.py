from unittest import TestCase
from app import app
from flask import session

class FlaskTests(TestCase):

    def setUp(self):
        'what to do before the tests'
        self.client = app.test_client()
        app.config['TESTING'] = True

    def test_working_home_page(self):
        'make sure that the html is displayed on the homepage'
        with app.test_client() as client:
            resp = client.get('/')
            html = resp.get_data(as_text = True)
            self.assertEqual(resp.status_code, 200)
            self.assertIn('<h1>Currency Converter</h1>', html)
            self.assertIn('<button>Convert</button>', html)