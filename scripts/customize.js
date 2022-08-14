function validation() {

    let full_name = $("#full_name");
    let email = $("#email");
    let DOE = $("#DOE");
    let total_guests = $("#total_guests");

    if (full_name == null || full_name.value == "" || full_name.value == "Type in Full Name (Firstname, Lastname)") {
        console.log("passed")
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

    else if (total_guests == null || total_guests.value == "") {
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