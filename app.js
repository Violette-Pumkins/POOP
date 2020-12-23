function loadDoc() {
        var httpRequest;
        document.getElementById("ajaxButton").addEventListener('click', makeRequest);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
        alert('Abandon :( Impossible de créer une instance de XMLHTTP');
        return false;
        }
        httpRequest.onreadystatechange = afficher;
        httpRequest.open('GET', "http://srvdlu/webserv/selectDB.php"); //'http://srvapi/api/stagiaires');
        httpRequest.send();
    }

    function afficher() {

        if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var tableauObjet = JSON.parse(this.responseText);
            console.log(tableauObjet);
            console.log(tableauObjet[0]);
            
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

                
                console.log(newElement);
            }
                
        } else {
            alert('Il y a eu un problème avec la requête.');
        }
        }
    }
};

// ::::::::::::::::::::::::::::::::::::::::::::crzeate
