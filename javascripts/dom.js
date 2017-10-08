"use strict";

const createDomString = (catz) => {
	var catString = '';
    for(var i = 0; i < catz.length; i++){
        var cat = catz[i];
        var newCat = "";
        if (cat.numberOfToes < 10) {
        newCat += `<div id="cat-card" class= "col-sm-4 disabled-cat">`;
        } else {
        newCat += `<div id="cat-card" class= "col-sm-4">`;
            }
        newCat +=   `<div class="container">`;
        newCat +=   `<img class="catImage" src="${cat.imageUrl}">`;
        newCat +=   `</div>`;
        newCat +=   `<div class="description-container">`;
        newCat +=       `<h3>Name: ${cat.name}</h3>`;
        newCat +=       `<p>Color: ${cat.color}</p>`;
        newCat +=       `<p>Special Skill: ${cat.specialSkill}</p>`;
        newCat += `<p id="toes">Number of Toes: ${cat.numberOfToes}</p>`;
        newCat +=   `</div>`;
        newCat += `</div>`;
        catString += newCat;
    }
    printToDom(catString);
};

const printToDom = (strang) => {
	$('#catHolder').html(strang);
};

module.exports = {createDomString};


