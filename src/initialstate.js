

/*
This is the initial state of the Redux Store. I store it in a separate file because I also use
it in the reducers when we do the Reset action.
It returns a function instead of an object to make sure no one can change the initial state.
*/

var C = require("./constants");

module.exports = function(){
    return {
        quiz: {
            currentValue: "",
			Points: 0,
			question: "Which company bought the company King which created the game candy crush?",
				CountQuestions: 0,
				CountChoices: 0,
				Choice1: "Valve",
				Choice2: "Microsoft",
				Choice3: "Blizzard",
				CountAnswers: 0
				
			
        
		}	
    }
};