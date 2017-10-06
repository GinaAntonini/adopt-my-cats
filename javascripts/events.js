"use strict";

const cats = require('./cats');
const dom = require('./dom');



$('#catInput').keypress((event) => {
	if (event.key === 'Enter'){
        let numberOfCats = $('#catInput').val();
        cats.loadCats(numberOfCats);
    }
    hideButtonAndInput();
});

$('#submitButton').click((event) => {
    let numberOfCats = $('#catInput').val();
    cats.loadCats(numberOfCats);
    hideButtonAndInput();
});

$('#disabledCatsButton').click((event) => {
    hideTheDisabledCats();
});

const hideButtonAndInput = () => {
    if (event.key === 'Enter' || event.target.id == 'submitButton') {
        $('#submitButton').addClass("hidden");
        $('#inputForm').addClass("hidden");
        $('#disabledCatsButton').removeClass("hidden");
    } 
};

const hideTheDisabledCats = () => {
    $('.disabled-cat').parentNode.parentNode.addClass("hidden");
};

module.exports = {}; 