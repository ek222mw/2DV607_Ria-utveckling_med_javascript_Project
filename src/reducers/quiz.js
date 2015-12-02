var initialState = require('./../initialstate');
var _ = require('lodash');
var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
		
		case 'Start':
		{
			document.getElementById('startbtn').style.visibility= "hidden";
			document.getElementById('cont').style.visibility= "visible";
			document.getElementById('quest').style.visibility= "visible";
			document.getElementById('pts').style.visibility= "visible";
			document.getElementById('msg').style.visibility= "visible";
			newState.Points = 0;
			newState.currentValue ="";
			newState.pos = 0;
			newState.quizArr = _.shuffle(newState.quizArr);
			newState.Choice1 = newState.quizArr[newState.pos].opt[0];
			newState.question = newState.quizArr[newState.pos].quest;
			newState.Choice2 = newState.quizArr[newState.pos].opt[1];
			newState.Choice3 = newState.quizArr[newState.pos].opt[2];
			return newState;
		}
		
        case 'Pressed':
			console.log(newState.quizArr.length);
			console.log(newState.pos);
			if(newState.quizArr.length-1 === newState.pos)
			{
				document.getElementById('startbtn').style.visibility= "visible";
				document.getElementById('cont').style.visibility= "hidden";
				document.getElementById('quest').style.visibility= "hidden";
				document.getElementById('pts').style.visibility= "hidden";
				document.getElementById('msg').style.visibility= "visible";
				if(action.answer === newState.quizArr[newState.pos].CorrAns)
				{
					newState.Points++;
				}
				newState.currentValue = "You score was "+newState.Points+"/"+newState.quizArr.length;
			}
			
			
            else if(action.answer === newState.quizArr[newState.pos].CorrAns)
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