'use strict';

let url = 'http://openapi.clearspending.ru/restapi/v3/contracts/search/?productsearch=';

$('.js-search').on('submit', (e) => {
    e.preventDefault();
    let searchString = $('#search').val();
    var request = $.ajax({
        type: 'GET',
        url: url+searchString,
        dataType: "json"
        });
    request.done(function(data){
        console.log(data);
    });
});