from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

requests_list = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/requests')
def requests():
    return render_template('requests.html', requests=requests_list)

@app.route('/submit-command', methods=['POST'])
def submit_command():
    command = request.form.get('command')
    requests_list.append(command)
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
