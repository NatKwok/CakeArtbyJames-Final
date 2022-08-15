"use strict";

$(document).ready(() => {
    console.log('api call ready');

    let myModal = new bootstrap.Modal(
        $("#contactModal"),
        {}
    );
    $("#contactModaDialog").addClass('modal-lg');

    $('#contact-api-call').click(
        (event) => {
            let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=b8701902d63f452cba0ef8fb15c5fe65";
            let rows = "";
            $.ajax({
                type: "GET",
                url: url,
                success: (resp) => {
                    console.log('#contact-api-call');
                    resp.results.forEach(item => rows = rows + row(item.id,item.title,item.image));
                    table("#contactModalBody",rows);
                    myModal.show();                  
                },
                error: (resp) => {
                  console.log(resp);
                  $("#contactModalBody").text("Error:" + url);
                }
            });
        }
    );

    let table = (parent,rows) => {
        $(parent)
         .html(`<table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">image</th>
                  </tr>
                </thead>
                <tbody  id="table-body">
                </tbody>
            </table>
         `);
         $("#table-body").html(rows);
     };
     let row = (id,title,image) => {
        return '<tr><th scope="row">' + id + '</th>'
                +  '<td>' + title + '</td>'
                +  '<td><img src="' + image + '"/></td>'
                + '</tr>';
     }
})    