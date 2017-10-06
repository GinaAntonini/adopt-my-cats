"use strict";

const createDomString = (catz) => {
	var catString = '';
    for(var i = 0; i < catz.length; i++){
        var newCat = "";

        newCat += `<div id="cat-card" class= "col-sm-4">`;
        newCat +=   `<div class="container">`;
        newCat +=   `<img class="catImage" src="${catz[i].imageUrl}">`;
        newCat +=   `</div>`;
        newCat +=   `<div class="description-container">`;
        newCat +=       `<h3>Name: ${catz[i].name}</h3>`;
        newCat +=       `<p>Color: ${catz[i].color}</p>`;
        newCat +=       `<p>Special Skill: ${catz[i].specialSkill}</p>`;
            if ($('#toes') < 10) {
                newCat += `<p id="toes" class="disabled-cat">Number of Toes: ${catz[i].numberOfToes}</p>`;
            } else {
                newCat += `<p id="toes" class="abledCats">Number of Toes: ${catz[i].numberOfToes}</p>`;
            }
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


