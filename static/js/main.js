'use strict';

let url = 'http://openapi.clearspending.ru/restapi/v3/contracts/search/?productsearch=';

$('.js-search').on('submit', (e) => {
    e.preventDefault();

    var searchString = $('#search').val();

    $.get('http://openapi.clearspending.ru/restapi/v3/contracts/search/?productsearch=' + searchString, (response) => {
        var len = response.contracts.data.length;
        if ( len > 10) {
            len = 5
        }
        for (var i = 0; i < len; i++) {
            $('.collection-item:first').clone().show().appendTo('.collection')
                .append('<p>Заказчик : '+ response.contracts.data[i].customer.fullName +'</p>')
                .append('<p>Поставщики : '+ response.contracts.data[i].suppliers[0].organizationName +'</p>')
                .append('<p>Услуга : '+ response.contracts.data[i].products[0].name +'</p>')
                .append('<p>Номер контракта : '+ response.contracts.data[i].regNum +'</p>')
                .append('<p>Федеральный закон : '+ response.contracts.data[i].number +'</p>')
                .append('<p>URL : <a href="' + response.contracts.data[i].contractUrl + '">Ссылка</a></p>')
        }
    });

});