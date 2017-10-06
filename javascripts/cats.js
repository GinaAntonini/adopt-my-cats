"use strict";

const dom = require('./dom');
let cats = [];

const loadCats = (numberOfCatz) => {
	$.ajax(`https://random-dogs-api.herokuapp.com/cats/${numberOfCatz}`).done((data) => {
		cats = data.cats;
		console.log(data);
		dom.createDomString(cats);
	}).fail((error) => {
		console.log(error);
	});
};



module.exports = {loadCats};
