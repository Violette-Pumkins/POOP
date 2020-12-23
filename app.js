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
/*************************************************************************************************************************************************************************** */
function loadDoc(){
    get(' http://srvapi/api/stagiaires')
};

function creerCompte(){
    var nomVal = document.getElementById('fname').value;
    var prenomVal = document.getElementById('lname').value;
    var Id = Math.random()*100;

    post ={
        // id:Id,
        nom:nomVal,
        prenom: prenomVal
    }


    addUser('http://srvapi/api/stagiaire', post)
}

/*************************************************************************************************************************************************************************** */

function afficher(tableauObjet) {

        var lists = document.getElementById('listes');
        for(let i=0; i<tableauObjet.length; i++){

            var newElement = document.createElement("li");
            newElement.innerHTML = tableauObjet[i].nom +"  "+tableauObjet[i].prenom;
            lists.appendChild(newElement);
            var modBtn = document.createElement("button");
                modBtn.classList.add("btn");
                modBtn.innerHTML = "Modifier";
                newElement.appendChild(modBtn);
                
            var suppBtn = document.createElement("button");
                suppBtn.classList.add("btn");
                suppBtn.innerHTML = "Supprimer";
                newElement.appendChild(suppBtn);

            
            // console.log(newElement);
        }
            
    } 
    //  else {
    //     alert('Il y a eu un problème avec la requête.');
    // }
