var initialState = require('./../initialstate');
var _ = require('lodash');
var quizArr = require('./../components/randquiz');
var nhlquiz = require('./../components/nhlquiz');
var C = require('./../constants');


var QuizReducer = function(state, action){
	
		var newState = Object.assign({}, state);
	
	
		if(action.type == '1')
		{
			newState.pos = 0;
			newState.qobj = quizArr[newState.pos];
			newState.temp = quizArr;
			newState.quiznow = 1;
		}
		else if(action.type == '2'){
			newState.pos = 0;
			newState.qobj = nhlquiz[newState.pos];
			newState.temp = nhlquiz;
			newState.quiznow = 2;
		}
		if(action.type == '1' || action.type == '2'){
			
				newState.Inprogress = true;
				newState.Points = 0;
				newState.currentValue ="";
				return newState;
		}
	
		if(action.type == '3' || action.type ==  '4')
		{
				
				if(newState.temp.length-1 === newState.pos)
				{
					newState.Inprogress = false;
					if(action.answer === newState.qobj.CorrAns)
					{
						newState.Points++;
					}
					newState.currentValue = "Your score was "+newState.Points+"/"+newState.temp.length;
					
					
					
					return newState;
				
				}
				
				else if(action.answer === newState.qobj.CorrAns)
				{
					newState.Points++;
					newState.pos++;
					newState.qobj = newState.temp[newState.pos]
					return newState;
					
				}
				else{
					newState.pos++;
					newState.qobj = newState.temp[newState.pos]
					return newState;
					
				}
		}
		else{
			return state || initialState().quiz;
		}
};


module.exports = QuizReducer;