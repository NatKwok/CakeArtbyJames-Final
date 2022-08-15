
function validation() {

    let full_name = document.getElementById('full_name');
    let email = document.getElementById('email');
    let DOE = document.getElementById('DOE');
    let total_guests = document.getElementById('total_guests');

    let full_nameModal = $("#full_name").val();
    let emailModal = $("#email").val();
    let DOEModal = $("#DOE").val();
    let total_guestsModal = $("#total_guests").val();
    let fillingModal = $("#filling").val();
    let flavorModal = $("#flavor").val();

    if (full_name == null || full_name.value == "" || full_name.value == "Type in Full Name (Firstname, Lastname)") {
        console.log("passed");
        alert("Please provide your full name");
        full_name.focus();
        return false;
        
    }

    else if (email == null || email.value == "" || email.value == "Enter your email address") {
        console.log("passed")
        alert("Please provide your email");
        email.focus();
        return false;
        
    }

    else if (DOE == null || DOE.value == "") {
        console.log("passed")
        alert("Please set a date");
        DOE.focus();
        return false;
        
    }

    else if (total_guests == null || total_guests.value == "" || total_guests.value == "Enter number of guests so we can prepare the cake size") {
        console.log("passed")
        alert("Please provide the total number of guests");
        total_guests.focus();
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
    alert("Your request has been submitted. Thank you for choosing CakeArt by James!");
}
