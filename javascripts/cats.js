"use strict";

let cats = [];

const loadCats = (numberOfCatz) => {
	$.ajax(`https://random-dogs-api.herokuapp.com/cats/${numberOfCatz}`).done((data) => {
		cats = data.cats;
		console.log(cats);
	}).fail((error) => {
		console.log(error);
	});
	return cats;
};

module.exports = {loadCats};
