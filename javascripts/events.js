"use strict";

const cats = require('./cats');

$('#catInput').keypress((event) => {
	if (event.key === 'Enter'){
		let numberOfCats = $('#catInput').val();
		// console.log('getting the catz');
		createDomString(cats.loadCats(numberOfCats));
		// console log('drawing the catz');
	}
});

const createDomString = (catz) => {
	var catString = '';
    for(var i = 0; i < catz.length; i++){
        var newCat = "";
        newCat += `<div class="cat-card">`;
        newCat += `<div class="image-container">`;
        newCat += `<img class="catImage" src="${catz[i].imageUrl}">`;
        newCat += `</div>`;
        newCat += `<div class="description-container">`;
        newCat += `<h3>${catz[i].name}</h3>`;
        newCat += `<p>${catz[i].color}</p>`;
        newCat += `<p>${catz[i].specialSkill}</p>`;
        newCat += `<p class="disabled-cat">${catz[i].numberOfToes}</p>`;
        newCat += `</div>`;
        newCat += `</div>`;
        catString += newCat;
    }
    printToDom(catString);
};

const printToDom = (strang) => {
	$('#catHolder').html(strang);
};


module.exports = {}; 