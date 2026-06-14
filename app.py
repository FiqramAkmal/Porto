from flask import Flask, render_template
import json
import os

app = Flask(__name__)

def load_data():
    data_path = os.path.join(app.root_path, 'data', 'portfolio_data.json')
    with open(data_path, 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/')
def index():
    data = load_data()
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
