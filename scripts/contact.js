"use strict";

$(document).ready(() => {
    let myModal = new bootstrap.Modal(
        $("#contactSendMsgModal"),
        {}
    );
    $('#ContactSendMsgForm').submit((event) => {
        event.preventDefault();
        if (isValid()){
            sendMessage();
        }else{
            $("#sendMsgModalBody").text("Error: The message's length should be larger then 10! ");
            myModal.show();
        }    
    });

    function isValid() {
        return $('textarea.form-control')[0].value.length > 10 ? true : false;
    }

    function sendMessage() {
        $("#sendMsgLoading").removeClass("invisible");
        let data = {};
        let formItems = $('#ContactSendMsgForm').serializeArray();
        formItems.forEach((index, item) => {
            data[item.name] = item.value;
        });
        
        $.ajax({
            type: "GET",
            url: $('#contact_json_url')[0].value,
            data: JSON.stringify(data),
            dataType: "json",
            success: (respMsg) => {
                $("#sendMsgModalBody").text(respMsg.message);
                $("#sendMsgLoading").addClass("invisible");
                myModal.show();
            },
            error: (respMsg) => {
                $("#sendMsgModalBody").text("Error: Cannot get the message from the server");
                $("#sendMsgLoading").addClass("invisible");
                myModal.show();
            }
        });
    }
});
