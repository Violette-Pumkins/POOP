function get(url) {
    console.log("GET : " + url);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send(null);
    xhr.responseType = 'json';
    xhr.onload = function () {
        //var users = JSON.parse(xhr.responseText);
        var listStagaire = xhr.response;

        if (xhr.readyState == 4 && xhr.status == "200") {
            // console.table(users);
            console.log(listStagaire);
            afficher(listStagaire);
        } else {
            console.error(users);
        }
    }
}

function addUser(url, data) {
    console.log("POST : " + url);

    // var data = {};
    // data.nom = "TERRIEUR";
    // data.prenom  = "Alex";
    // // var data = {"nom":"TERRIEUR","prenom":"Alex"};
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, data);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);

    xhr.onload = function () {
        var user = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(user);
        } else {
            console.error(user);
        }
    }
}

// UPDATE A USER
function updateUser(url, data) {
    console.log("PUT|PATCH : " + url);

    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();

    xhr.open("PATCH", url, data);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);

    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "202") {
            console.log("Mise à jour réussie");
        } else {
            console.error("PB Mise à jour");
        }
    }
}

// DELETE A USER
function delUser(url) {
    console.log("DELETE : " + url);
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);
    xhr.send(null);

    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "202") {
            console.log("Suppression réussie");
        } else {
            console.error("PB Suppression");
        }
    }
}

function rechGet(url) {
    console.log("GET : " + url);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send(null);
    xhr.responseType = 'json';
    xhr.onload = function () {
        //var users = JSON.parse(xhr.responseText);
        var listStagaire = xhr.response;

        if (xhr.readyState == 4 && xhr.status == "200") {
            // console.table(users);
            console.log(listStagaire);
            afficher(listStagaire);
        } else {
            console.error(users);
        }
    }
}

/*************************************************************************************************************************************************************************** */
    function loadDoc() {
    
        var lists = document.getElementById('listes');
        lists.innerHTML = '';
        get(' http://srvapi/api/stagiaires');
        
    }  
    function get(url) {
        console.log("GET : " + url);

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send(null);
        xhr.responseType = 'json';
        xhr.onload = function () {
            //var users = JSON.parse(xhr.responseText);
            var listStagaire = xhr.response;

            if (xhr.readyState == 4 && xhr.status == "200") {
                // console.table(users);
                console.log(listStagaire);
                afficher(listStagaire);
            } 
            else {
                console.error(users);
            }
        }
    }

    function addUser(url, data) {
        console.log("POST : " + url);

        // var data = {};
        // data.nom = "TERRIEUR";
        // data.prenom  = "Alex";
        // // var data = {"nom":"TERRIEUR","prenom":"Alex"};
        var json = JSON.stringify(data);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, data);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);

        xhr.onload = function () {
            var user = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "201") {
                console.table(user);
            } else {
                console.error(user);
            }
        }
    }

    // UPDATE A USER
    function updateUser(url, data) {
        console.log("PUT|PATCH : " + url);

        var json = JSON.stringify(data);

        var xhr = new XMLHttpRequest();

        xhr.open("PATCH", url, data);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);

        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == "202") {
                console.log("Mise à jour réussie");
            } else {
                console.error("PB Mise à jour");
            }
        }
    }

    // DELETE A USER
    function delUser(url) {
        console.log("DELETE : " + url);
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", url, true);
        xhr.send(null);

        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == "202") {
                console.log("Suppression réussie");
            } else {
                console.error("PB Suppression");
            }
        }
    }

    function rechGet(url) {
        console.log("GET : " + url);

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send(null);
        xhr.responseType = 'json';
        xhr.onload = function () {
            //var users = JSON.parse(xhr.responseText);
            var listStagaire = xhr.response;

            if (xhr.readyState == 4 && xhr.status == "200") {
                // console.table(users);
                console.log(listStagaire);
                afficher(listStagaire);
            } 
            else {
                console.error(users);
            }
        }
    }

/*************************************************************************************************************************************************************************** */





function modifier(event) {
    console.log(event.getAttribute("data-id"));
    var modID = event.getAttribute("data-id");
    console.log(modID);
    var modPost = {
        nom: "teklit",
        prenom: "TEWOLDE"
    }
    updateUser(`http://srvapi/api/stagiaire/${modID}`, modPost);
}

function supprimer(event) {
    console.log(event.getAttribute("data-id"));
    var delID = event.getAttribute("data-id");
    console.log(delID);

    delUser(`http://srvapi/api/stagiaire/${delID}`);
}
// recherche
function recherche() {
    var nomReche = document.getElementById("nomrecherche").value;
    var prenomReche = document.getElementById("prenomrecherche").value;
    if (nomReche && nomReche.length < 2) {
        //console.log(nomReche);
        get(`http://srvapi/api/stagiaires/nom/${nomReche}`);
    }
    if (prenomReche && prenomReche.length < 2) {
        // console.log(prenomReche);
        get(`http://srvapi/api/stagiaires/prenom/${prenomReche}`);
    }
}






/*************************************************************************************************************************************************************************** */

function afficher(tableauObjet) {

    var lists = document.getElementById('listes');
    for (let i = 0; i < tableauObjet.length; i++) {

        var newElement = document.createElement("li");
        newElement.innerHTML = tableauObjet[i].nom + "  " + tableauObjet[i].prenom;
        //console.log(tableauObjet[i].id);
        lists.appendChild(newElement);
        var modBtn = document.createElement("button");
        modBtn.classList.add("btn");
        modBtn.innerHTML = "Modifier";
        modBtn.setAttribute("id", "modID")
        modBtn.setAttribute("data-id", tableauObjet[i].id);
        modBtn.setAttribute("onclick", "modifier(this)");
        newElement.appendChild(modBtn);

        var suppBtn = document.createElement("button");
        suppBtn.classList.add("btn");
        suppBtn.innerHTML = "Supprimer";
        suppBtn.setAttribute("id", "supID")
        suppBtn.setAttribute("data-id", tableauObjet[i].id);
        suppBtn.setAttribute("onclick", "supprimer(this)");
        newElement.appendChild(suppBtn);


        // console.log(newElement);
    }


}

function creerCompte() {
    var nomVal = document.getElementById('nom').value;
    var prenomVal = document.getElementById('prenom').value;
    var Id = Math.random() * 100;

    post = {
        nom: nomVal,
        prenom: prenomVal
    }
    addUser('http://srvapi/api/stagiaire', post)
}

  
