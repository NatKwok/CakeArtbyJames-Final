function validation() {

    var full_name = document.getElementById('full_name').value;
    var email = document.getElementById('email').value;
    var DOE = document.getElementById('DOE').value;
    var total_guests = document.getElementById('total_guests').value;

    if (full_name == "" || full_name ==null) {
        console.log("passed")
        alert("Please provide your full name");
        full_name.focus();
        return false;
        
    }

    else if (email == "" || email ==null) {
        console.log("passed")
        alert("Please provide your email");
        email.focus();
        return false;
        
    }

    else if (DOE == "" || DOE ==null) {
        console.log("passed")
        alert("Please set a date");
        DOE.focus();
        return false;
        
    }

    else if (total_guests == "" || total_guests ==null) {
        console.log("passed")
        alert("Please provide the total number of guests");
        total_guests.focus();
        return false;
        
    }

    else {
        console.log("failed")
        alert("Your request has been submitted. Thank you for choosing CakeArt by James!");
        
    }


}