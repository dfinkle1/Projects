from flask import Flask, render_template, request, flash, redirect
from forex_python.converter import CurrencyRates, CurrencyCodes

app = Flask(__name__)
app.secret_key = 'joe_mamas'
currency_dictionary = ["EUR", "IDR", "BGN", "ILS", "GBP", "DKK", "CAD", "JPY", "HUF", "RON", "MYR", "SEK", "SGD", "HKD", "AUD", "CHF", "KRW", "CNY", "TRY", "HRK", "NZD", "THB", "USD", "NOK", "RUB", "INR", "MXN", "CZK", "BRL", "PLN", "PHP", "ZAR"]
currency_set = set(currency_dictionary)
c = CurrencyRates()
codes = CurrencyCodes()


@app.route('/',methods=['GET'])
def index():
    return render_template('index.html',options = currency_dictionary)

@app.route('/answers')
def answer():
    args = request.args
    inputs = args.get('inputs').upper()
    outputs = args.get('outputs').upper()
    values = args.get('values')
    value = float(values)

    if inputs not in currency_set and outputs not in currency_set:
        flash(f'{inputs} and {outputs} are not valid currencies')
        return redirect('/')
    if inputs not in currency_set:
        flash(f'{inputs} is not a valid currency')
        return redirect('/')
    if outputs not in currency_set:
        flash(f'{outputs} is not a valid currency')
        return redirect('/')
    result =  round(c.convert(inputs,outputs,value),2)
    return render_template(
        'answers.html',c = CurrencyRates() ,
        inputs = inputs, outputs = outputs, result = result, codes = codes, options = currency_dictionary)