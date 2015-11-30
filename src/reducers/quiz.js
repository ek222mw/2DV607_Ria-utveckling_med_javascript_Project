var initialState = require('./../initialstate');

var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
	
	var quest1 = {quest:"Which company bought the company King which created the game candy crush?",opt:["Valve","Microsoft","Blizzard"],CorrAns:"Ans3"};
	var quest2 = {quest:"In which band was Bon Scott the singer?",opt:["Iron Maiden","Metallica","AC/DC"],CorrAns:"Ans3"};
	var quest3 = {quest:"In which NHL team did Teemu Selänne play?",opt:["Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins"],CorrAns:"Ans2"};
	
	var quizObj = [quest1,quest2,quest3];
	
			
			newState.Choice1 = quizObj[0].opt[0];
			
			
			newState.question = quizObj[0].quest;
			
			
			newState.Choice2 = quizObj[0].opt[1];
			
			
			newState.Choice3 = quizObj[0].opt[2];
			
			
    switch(action.type){
        case 'Pressed':
            if(action.answer === quizObj[newState.pos].CorrAns)
			{
				newState.Points++;
				
				newState.currentValue = "Correct";
				newState.pos++;
				
				
				newState.Choice1 = quizObj[newState.pos].opt[0];
				
				
				newState.question = quizObj[newState.pos].quest;
				
				
				newState.Choice2 = quizObj[newState.pos].opt[1];
				
				
				newState.Choice3 = quizObj[newState.pos].opt[2];
				
			}
			else{
				newState.currentValue = "False";
				
				newState.pos++;
				
				
				newState.Choice1 = quizObj[newState.pos].opt[0];
				
				
				newState.question = quizObj[newState.pos].quest;
				
				
				newState.Choice2 = quizObj[newState.pos].opt[1];
				
				
				newState.Choice3 = quizObj[newState.pos].opt[2];
				
			}
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;