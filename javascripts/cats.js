"use strict";

let cats = [];

const getCats = (numberOfCatz) => {
	$.ajax(`https://random-dogs-api.herokuapp.com/cats/${numberOfCatz}`).done((data) => {
		cats = data.cats;
		console.log(cats);
	}).fail((error) => {
		console.log(error);
	});
};

const returnCats = () => {
	return cats;
};


module.exports = {getCats, returnCats};
