
function validation() {

    let full_nameModal = $("#full_name").val();
    let emailModal = $("#email").val();
    let DOEModal = $("#DOE").val();
    let total_guestsModal = $("#total_guests").val();
    let fillingModal = $("#filling").val();
    let flavorModal = $("#flavor").val();

    if (full_nameModal == null || full_nameModal == "" || full_nameModal == "Le Nom (Prenom, Nom)" ) {
        console.log("passed full_name");
        alert("Entrer ton nom svp");
        $("#full_name").focus();
        return false;
        
    }

    else if (emailModal == null || emailModal == "" || emailModal == "Courriel") {
        console.log("passed email")
        alert("Entrer ton courriel svp");
        $("#email").focus();
        return false;
        
    }

    else if (DOEModal == null || DOEModal == "") {
        console.log("passed DOE")
        alert("Quel est le date de ton eventement?");
        $("#DOE").focus();
        return false;
        
    }

    else if (total_guestsModal == null || total_guestsModal == "" || total_guestsModal == "Invitée totalement") {
        console.log("passed guests")
        alert("Combien personne de ton eventement?");
        $("#total_guests").focus();
        return false;
        
    }

    else {
        console.log("All inputs filled");
        $('#testModal').modal('show');
        $("#full_name2").html(full_nameModal);
        $("#email2").html(emailModal);
        $("#DOE2").html(DOEModal);
        $("#total_guests2").html(total_guestsModal);
        $("#flavour2").html(flavorModal);
        $("#filling2").html(fillingModal);
                console.log("modalTest Passed");
        
    }
    
}

function yes() {
    alert("Ton commande est complete! Merci pour choisir CakeArt de James. Bon Appetite!");
    $('#testModal').modal('hide');
}
