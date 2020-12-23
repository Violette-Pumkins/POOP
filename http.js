function get(url) {
    console.log("GET : " + url);
    
    var xhr  = new XMLHttpRequest();
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
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
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
function updateUser(url) {
    console.log("PUT|PATCH : " + url);

    var data = {};
    data.nom = "TERRIEUR";
    data.prenom  = "Alain";
    // var data = {"nom":"TERRIEUR","prenom":"Alain"};
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    //xhr.open("PUT", url, true);
    xhr.open("PATCH", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);

    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "202") {
            console.log("Mise à jour réussie");
        } else {
            console.error("PB Mise à jour");
        }
    }
}

/*************************************************************************************************************************************************************************** */
//modif1


function loadDoc(){
    get(' http://srvapi/api/stagiaires')
};


function creerCompte(){
    var nomVal = document.getElementById('nom').value;
    var prenomVal = document.getElementById('prenom').value;

        console.log(nomVal);
        console.log(prenomVal);
    post ={
    //  id:Id,
        nom:nomVal,
        prenom: prenomVal
    }
    addUser('http://srvapi/api/stagiaire', post)
}

function modifier(){
    var modID = document.getElementById("modID").getAttribute("data-id");
    console.log(modID);
    // delUser(`http://srvapi/api/stagiaire/${modID}`);
}

/*************************************************************************************************************************************************************************** */

function afficher(tableauObjet) {

        var lists = document.getElementById('listes');
        for(let i=0; i<tableauObjet.length; i++){

            var newElement = document.createElement("div");
            newElement.innerHTML = tableauObjet[i].nom +"  "+ tableauObjet[i].prenom;
            lists.appendChild(newElement);
            var modBtn = document.createElement("button");
                modBtn.classList.add("btn");
                modBtn.innerHTML = "Modifier";
                modBtn.setAttribute("id","mod");
                modBtn.setAttribute("data-toggle", "modal"); 
                modBtn.setAttribute("data-target", "#mod");
                modBtn.setAttribute("data-id", `${tableauObjet[i].id}`);
                // modBtn.setAttribute("onclick", "");
                newElement.appendChild(modBtn);
                
            var suppBtn = document.createElement("button");
                suppBtn.classList.add("btn");
                suppBtn.setAttribute("id","sup");
                suppBtn.innerHTML = "Supprimer";
                newElement.appendChild(suppBtn);

            
            // console.log(newElement);
        }
            
    } 
    
