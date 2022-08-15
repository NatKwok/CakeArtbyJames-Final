
function validation() {

    let full_name = document.getElementById('full_name');
    let email = document.getElementById('email');
    let DOE = document.getElementById('DOE');
    let total_guests = document.getElementById('total_guests');

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
        
    }
    
}

function yes() {
    alert("Your request has been submitted. Thank you for choosing CakeArt by James!");
}

function summary() {

    var full_name = document.getElementById('full_name').value;
    var email = document.getElementById('email').value;
    //let DOE = document.getElementById('DOE').value;
    var total_guests = document.getElementById('total_guests').value;
    //let flavour  = document.getElementById('flavour').value;
   // let filling = document.getElementById('filling').value;

    document.getElementById('full_name2').value = "full_name";
    document.getElementById('email2').innerHTML = email;
    //document.getElementById('DOE2').innerHTML = DOE;
    document.getElementById('total_guests2').innerHTML = total_guests;

    console.log("Summary Passed");

    
}