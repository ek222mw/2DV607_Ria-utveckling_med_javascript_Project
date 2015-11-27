var initialState = require('./../initialstate');

var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
	
	
	
	var quizObj = {quests:["In which band was Bon Scott the singer?", "In which NHL team did Teemu Selänne play?"],
	opt:["Iron Maiden","Metallica","AC/DC", "Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins"],
	CorrAns:["Ans3","Ans3","Ans2"]};
	
	
    switch(action.type){
        case 'Pressed':
            if(action.answer === quizObj.CorrAns[newState.CountAnswers])
			{
				newState.Points++;
				newState.CountAnswers++;;
				newState.currentValue = "Correct";
				
				newState.Choice1 = quizObj.opt[newState.CountChoices];
				newState.CountChoices++;
				
				newState.question = quizObj.quests[newState.CountQuestions];
				newState.CountQuestions++;
				
				newState.Choice2 = quizObj.opt[newState.CountChoices];
				newState.CountChoices++;
				
				newState.Choice3 = quizObj.opt[newState.CountChoices];
				newState.CountChoices++;
			}
			else{
				newState.currentValue = "False";
				newState.CountAnswers++;;
				
				newState.Choice1 = quizObj.opt[newState.CountChoices];
				newState.CountChoices++;
				
				newState.question = quizObj.quests[newState.CountQuestions];
				newState.CountQuestions++;
				
				newState.Choice2 = quizObj.opt[newState.CountChoices];
				newState.CountChoices++;
				
				newState.Choice3 = quizObj.opt[newState.CountChoices];
				newState.CountChoices++;
			}
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;