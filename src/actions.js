

/*
This module contains action creators. They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them, in our case it is just Home.
*/

var constants = require("./constants");

module.exports = {
	
	quiz: function(answer){
		return {type: 'Pressed', answer: answer};
    },
	start: function(){
        return {type: 'Start'};
    },
	startnhlquiz: function(){
        return {type: 'StartNHLQuiz'};
    },
	nhlquiz: function(answer){
		return {type: 'NHL Quiz', answer: answer};
    }
	
};