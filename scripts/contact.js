"use strict";

$(document).ready(() => {
    let myModal = new bootstrap.Modal(
        $("#contactModal"),
        {}
    );
    $("#contactModaDialog").removeClass('modal-lg');

    $('#ContactSendMsgForm').submit((event) => {
        event.preventDefault();
        if (isValid()){
            sendMessage();
        }else{
            $("#contactModalBody").text("Error: The message's length should be larger then 10! ");
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

        let href = location.href;
        let url =  href.slice(href.lastIndexOf('/') + 1);
        url = "/data/" + url.slice(0,url.lastIndexOf('.')) + '.json';
        
        $.ajax({
            type: "GET",
            url: url,
            data: JSON.stringify(data),
            dataType: "json",
            success: (respMsg) => {
                $("#contactModalBody").text(respMsg.message);
                $("#sendMsgLoading").addClass("invisible");
                myModal.show();
            },
            error: (respMsg) => {
                $("#contactModalBody").text("Error: Cannot get the message from the server");
                $("#sendMsgLoading").addClass("invisible");
                myModal.show();
            }
        });
    }
});
