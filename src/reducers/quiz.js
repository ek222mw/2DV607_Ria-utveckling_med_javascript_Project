var initialState = require('./../initialstate');

var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
	
	var quests = new Array("In which band was Bon Scott the singer?", "In which NHL team did Teemu Selänne play?");
	var answers = new Array("Ans3","Ans3","Ans2");
	var choices = new Array("Iron Maiden","Metallica", "AC/DC", "Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins");
	
	
    switch(action.type){
        case 'Pressed':
            if(action.answer === answers[newState.CountAnswers])
			{
				newState.Points++;
				newState.CountAnswers++;;
				newState.currentValue = "Correct";
				
				newState.Choice1 = choices[newState.CountChoices];
				newState.CountChoices++;
				
				newState.question = quests[newState.CountQuestions];
				newState.CountQuestions++;
				
				newState.Choice2 = choices[newState.CountChoices];
				newState.CountChoices++;
				
				newState.Choice3 = choices[newState.CountChoices];
				newState.CountChoices++;
			}
			else{
				newState.currentValue = "False";
				newState.CountAnswers++;;
				
				newState.Choice1 = choices[newState.CountChoices];
				newState.CountChoices++;
				
				newState.question = quests[newState.CountQuestions];
				newState.CountQuestions++;
				
				newState.Choice2 = choices[newState.CountChoices];
				newState.CountChoices++;
				
				newState.Choice3 = choices[newState.CountChoices];
				newState.CountChoices++;
			}
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;