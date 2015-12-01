var initialState = require('./../initialstate');
var _ = require('lodash');
var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
	
	var quest1 = {quest:"Which company bought the company King which created the game candy crush?",opt:["Valve","Microsoft","Blizzard"],CorrAns:"Ans3"};
	var quest2 = {quest:"In which band was Bon Scott the singer?",opt:["Iron Maiden","Metallica","AC/DC"],CorrAns:"Ans3"};
	var quest3 = {quest:"In which NHL team did Teemu Selänne play?",opt:["Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins"],CorrAns:"Ans2"};
	
	var quizArr = [quest1,quest2,quest3];
	var quizArrRand = quizArr
	if(newState.bool < 1)
	{
		quizArrRand = _.shuffle(quizArr);
		newState.Choice1 = quizArrRand[0].opt[0];
		newState.question = quizArrRand[0].quest;
		newState.Choice2 = quizArrRand[0].opt[1];
		newState.Choice3 = quizArrRand[0].opt[2];
	}
	newState.bool++;
			
    switch(action.type){
        case 'Pressed':
            if(action.answer === quizArrRand[newState.pos].CorrAns)
			{
				newState.Points++;
				
				newState.currentValue = "Correct";
				newState.pos++;
				
				
				newState.Choice1 = quizArrRand[newState.pos].opt[0];
				newState.question = quizArrRand[newState.pos].quest;
				newState.Choice2 = quizArrRand[newState.pos].opt[1];
				newState.Choice3 = quizArrRand[newState.pos].opt[2];
				
			}
			else{
				newState.currentValue = "False";
				newState.pos++;
				
				
				newState.Choice1 = quizArrRand[newState.pos].opt[0];
				newState.question = quizArrRand[newState.pos].quest;
				newState.Choice2 = quizArrRand[newState.pos].opt[1];
				newState.Choice3 = quizArrRand[newState.pos].opt[2];
				
			}
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;