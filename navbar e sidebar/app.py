from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
import mysql.connector
import datetime
import csv
import pandas as pd
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('info.html')

@app.route('/info')
def info():
    return render_template('info.html')

@app.route('/dados',methods =['GET','POST'])
def dados():
    return render_template('dados.html')

@app.route('/dadoscsv', methods= ['GET', 'POST'])
def dadoscsv():
    tipo = request.form['dadosofc']
    if tipo:
        with open('../Docs/csv/' + tipo +'.csv', encoding='UTF-8') as file:
            df = pd.read_csv(file, delimiter=';')
            html_table = df.to_html(classes='table table-striped', index=False)
            response = {"table": html_table}
            return jsonify(response)
    else:
        return jsonify({'error': 'No file part'})
    
@app.route('/fontes')
def fontes():
    return render_template('fontes.html')

@app.route('/localizacao')
def localizacao():
    return render_template('localizacao.html')

if __name__ == "__main__":
    app.secret_key = '8f2bdd84d7c4443215a42c84dabd52b21f9bdd596790cd61'
    app.run(debug=True)