
function validation() {

    let full_name = $("#full_name");
    let email = $("#email");
    let DOE = $("#DOE");
    let total_guests = $("#total_guests");

    if (full_name.value == null || full_name.value == "" || full_name.value == "Type in Full Name (Firstname, Lastname)" ) {
        console.log("passed full name")
        alert("Please provide your full name");
        full_name.focus();
        return false;
        
    }

    else if (email == null || email.val("") || email.val("Enter your email address") ) {
        console.log("passed email")
        alert("Please provide your email");
        email.focus();
        return false;
        
    }

    else if (DOE == null || DOE.val("") ) {
        console.log("passed DOE")
        alert("Please set a date");
        DOE.focus();
        return false;
        
    }

    else if (total_guests == null || total_guests.val("") || total_guests.val("Enter number of guests so we can prepare the cake size") ) {
        console.log("passed guests")
        alert("Please provide the total number of guests");
        total_guests.focus();
        return false;
        
    }

    else {
        console.log("failed")
        alert("Your request has been submitted. Thank you for choosing CakeArt by James!");
        $('#testModal').modal('show');
    }


}
        
    
