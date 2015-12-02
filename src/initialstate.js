

/*
This is the initial state of the Redux Store. I store it in a separate file because I also use
it in the reducers when we do the Reset action.
It returns a function instead of an object to make sure no one can change the initial state.
*/

var C = require("./constants");

module.exports = function(){
	
	    var quest1 = {quest:"Which company bought the company King which created the game candy crush?",opt:["Valve","Microsoft","Blizzard"],CorrAns:"Ans3"};
		var quest2 = {quest:"In which band was Bon Scott the singer?",opt:["Iron Maiden","Metallica","AC/DC"],CorrAns:"Ans3"};
		var quest3 = {quest:"In which NHL team did Teemu Selänne play?",opt:["Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins"],CorrAns:"Ans2"};
	
    return {
        quiz: {
            currentValue: "",
			Points: 0,
			question: "",
				CountQuestions: 0,
				CountChoices: 0,
				Choice1: "",
				Choice2: "",
				Choice3: "",
				CountAnswers: 0,
				pos: 0,
				quizArr:[quest1, quest2, quest3],
				
				
				
			
        
		}	
    }
};