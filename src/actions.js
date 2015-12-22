

/*
This module contains action creators. They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them, in our case it is just Home.
*/

var constants = require("./constants");

module.exports = {
	
	quest: function(quiznumber){
		return {type: quiznumber.quest, answer: quiznumber.answer};
    },
	start: function(quiznumber){
        return {type:quiznumber};
    },
	
	
	
};