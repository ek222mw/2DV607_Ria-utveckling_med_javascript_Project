var initialState = require('./../initialstate');
var _ = require('lodash');
var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
		
		case 'Start':
		{
			newState.quizArr = _.shuffle(newState.quizArr);
			newState.Choice1 = newState.quizArr[newState.pos].opt[0];
			newState.question = newState.quizArr[newState.pos].quest;
			newState.Choice2 = newState.quizArr[newState.pos].opt[1];
			newState.Choice3 = newState.quizArr[newState.pos].opt[2];
			return newState;
		}
		
        case 'Pressed':
		
			console.log(action.answer);
			console.log(newState.quizArr[newState.pos].CorrAns);
		
            if(action.answer === newState.quizArr[newState.pos].CorrAns)
			{
				newState.Points++;
				newState.currentValue = "Correct";
				newState.pos++;
				
				
				newState.Choice1 = newState.quizArr[newState.pos].opt[0];
				newState.question = newState.quizArr[newState.pos].quest;
				newState.Choice2 = newState.quizArr[newState.pos].opt[1];
				newState.Choice3 = newState.quizArr[newState.pos].opt[2];
				
			}
			else{
				newState.currentValue = "False";
				newState.pos++;
				
				
				newState.Choice1 = newState.quizArr[newState.pos].opt[0];
				newState.question = newState.quizArr[newState.pos].quest;
				newState.Choice2 = newState.quizArr[newState.pos].opt[1];
				newState.Choice3 = newState.quizArr[newState.pos].opt[2];
				
			}
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;