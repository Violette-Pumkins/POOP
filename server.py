from flask import Flask, escape, request, jsonify, render_template, send_from_directory, make_response
import json

app = Flask(__name__, template_folder='.', static_url_path='', static_folder='.')
app.debug = True

users = [
    {"nom": "Chan", "prenom": "Phoebe", "id": 3},
    {"nom": "Chan", "prenom": "Yuuko", "id": 1}
]

with open("bdd.json", "r") as f:
    users = json.load(f)

last_id = len(users) + 2

@app.route('/')
def hello():
    name = request.args.get("name", "World")
    # return f'Hello, {escape(name)}!'
    return render_template("projetAfpa.html")


@app.route('/poopProject.css')
def css():
    return app.send_static_file('poopProject.css')


@app.route('/controleChampNom.js')
def controleChampNom():
    return app.send_static_file('controleChampNom.js')


@app.route('/http.js')
def http_js():
    return app.send_static_file('http.js')


@app.route('/<path:path>')
def send_file(path):
    return app.send_static_file(path)
    # return send_from_directory('.', path)


@app.route('/api/stagiaires')
def stagiaires():
    return make_response(jsonify(users), 200)


@app.route('/api/stagiaire', methods=['POST'])
def add_stagiaire():
    global last_id
    data = request.json
    print(data)
    last_id += 1
    data['id'] = last_id

    users.append(data)
    return make_response(jsonify(users), 200)


@app.route('/api/stagiaire/<int:id>', methods=['PATCH'])
def patch_stag(id):
    data = request.json
    print(data)
    for user in users:
        if user['id'] == id:
            user['nom'] = data['nom']
            user['prenom'] = data['prenom']
            return make_response(jsonify(user), 202)
    return make_response(jsonify([]), 202)


@app.route('/api/stagiaire/<int:id>', methods=['DELETE'])
def del_stag(id):
    for user in users:
        if user['id'] == id:
            users.remove(user)
            return make_response(jsonify(user), 202)
    return make_response(jsonify(users), 202)


if __name__ == '__main__':
    app.run('0.0.0.0', port='5000', debug=True)
