from flask import Flask
from flask import render_template
from flask import request
    
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/info')
def info():
    return render_template('info.html')

@app.route('/dados')
def dados():
    return render_template('dados.html')

@app.route('/localizacao')
def localizacao():
    return render_template('localizacao.html')

@app.route('/filtrolocal', methods=['POST', 'GET'])
def select():
    if request.method == 'POST':
        valuereg = request.form.get('regiao')
        valueest = request.form.get('estado')
        if valuereg == "":
            return '''<h1> Selecione uma região válida! '''
        return render_template('localizacao.html', valuereg=valuereg) #'''
                  #<h1>A região escolhida é: {}</h1>
                  #<h1>O estado escolhido é: {}</h1>'''.format(valuereg, valueest)
if __name__ == "__main__":
    app.run(debug=True)