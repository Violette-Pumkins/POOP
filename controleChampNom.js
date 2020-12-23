
function verifNom(){
    var chaineNom = document.querySelector("#nom").value;
    var chainePrenom = document.querySelector("#prenom").value;
    if ((chaineNom.length < 2)) {
        alert("ERR: 2 caractères minimum pour votre Nom");
        return false;
    }if (chainePrenom.length < 2) {
        alert("ERR: 2 caractères minimum pour votre Prénom");
        return false;
    }else {alert("Bravo ! Votre profil est enregistré.");
    return true;
    }
}

