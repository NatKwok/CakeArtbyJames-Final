
function validation() {

    let full_nameModal = $("#full_name").val();
    let emailModal = $("#email").val();
    let DOEModal = $("#DOE").val();
    let total_guestsModal = $("#total_guests").val();
    let fillingModal = $("#filling").val();
    let flavorModal = $("#flavor").val();

    if (full_nameModal == null || full_nameModal == "" || full_nameModal == "Type in Full Name (Firstname, Lastname)") {
        console.log("passed");
        alert("Please provide your full name");
        $("#full_name").focus();
        return false;
        
    }

    else if (emailModal == null || emailModal == "" || emailModal == "Enter your email address") {
        console.log("passed")
        alert("Please provide your email");
        $("#email").focus();
        return false;
        
    }

    else if (DOEModal == null || DOEModal == "") {
        console.log("passed")
        alert("Please set a date");
        $("#DOE").focus();
        return false;
        
    }

    else if (total_guestsModal == null || total_guestsModal == "" || total_guestsModal == "Enter number of guests so we can prepare the cake size") {
        console.log("passed")
        alert("Please provide the total number of guests");
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
    alert("Your request has been submitted. Thank you for choosing CakeArt by James!");
    $('#testModal').modal('hide');
}
