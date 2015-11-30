var initialState = require('./../initialstate');

var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
	
	var quest1 = {quest:"Which company bought the company King which created the game candy crush?",opt:["Valve","Microsoft","Blizzard"],CorrAns:"Ans3"};
	var quest2 = {quest:"In which band was Bon Scott the singer?",opt:["Iron Maiden","Metallica","AC/DC"],CorrAns:"Ans3"};
	var quest3 = {quest:"In which NHL team did Teemu Selänne play?",opt:["Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins"],CorrAns:"Ans2"};
	
	var quizObj = [quest1,quest2,quest3];
	
			newState.CountAnswers++;
			newState.Choice1 = quizObj[0].opt[newState.CountChoices];
			newState.CountChoices++;
			
			newState.question = quizObj[0].quest[newState.CountQuestions];
			newState.CountQuestions++;
			
			newState.Choice2 = quizObj[0].opt[newState.CountChoices];
			newState.CountChoices++;
			
			newState.Choice3 = quizObj[0].opt[newState.CountChoices];
			newState.CountChoices++;
			
	
    switch(action.type){
        case 'Pressed':
            if(action.answer === quizObj[0].CorrAns[newState.CountAnswers])
			{
				newState.Points++;
				newState.CountAnswers++;
				newState.currentValue = "Correct";
				newState.pos++;
				
				console.log(newState.CountChoices);
				newState.Choice1 = quizObj[0].opt[newState.CountChoices];
				newState.CountChoices++;
				
				newState.question = quizObj[0].quest[newState.CountQuestions];
				newState.CountQuestions++;
				
				newState.Choice2 = quizObj[0].opt[newState.CountChoices];
				newState.CountChoices++;
				
				newState.Choice3 = quizObj[0].opt[newState.CountChoices];
				newState.CountChoices++;
			}
			else{
				newState.currentValue = "False";
				newState.CountAnswers++;;
				newState.pos++;
				
				newState.CountAnswers++;
				newState.Choice1 = quizObj[1].opt[newState.CountChoices];
				newState.CountChoices++;
				
				newState.question = quizObj[1].quest[newState.CountQuestions];
				newState.CountQuestions++;
				
				newState.Choice2 = quizObj[1].opt[newState.CountChoices];
				newState.CountChoices++;
				
				newState.Choice3 = quizObj[1].opt[newState.CountChoices];
				newState.CountChoices++;
			}
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;