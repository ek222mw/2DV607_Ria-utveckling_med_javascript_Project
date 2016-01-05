var initialState = require('./../initialstate');
var _ = require('lodash');
var quizArr = require('./../components/randquiz');
var nhlquiz = require('./../components/nhlquiz');
var C = require('./../constants');


var QuizReducer = function(state, action){
	
		var newState = Object.assign({}, state);
	
	
		if(action.type == 'Start' && action.quiznr === '1')
		{
			newState.Inprogress = true;
			newState.Points = 0;
			newState.pos = 0;
			newState.currentValue ="";
			newState.qobj = quizArr[newState.pos];
			newState.temp = quizArr;
			newState.quiznow = 1;
			return newState;
		}
		else if(action.type === 'Start' && action.quiznr === '2'){
			newState.Inprogress = true;
			newState.Points = 0;
			newState.pos = 0;
			newState.currentValue ="";
			newState.qobj = nhlquiz[newState.pos];
			newState.temp = nhlquiz;
			newState.quiznow = 2;
			return newState;
		}
		
	
		if((action.type == 'Answer' && action.quiznr === '3') || (action.type === 'Answer' && action.quiznr === '4'))
		{
				
				if(newState.temp.length-1 === newState.pos)
				{
					newState.Inprogress = false;
					
					if(action.answer === newState.qobj.CorrAns)
					{
						newState.Points++;
					}
					
					if(newState.Points > newState.HighScore && newState.quiznow === 1)
					{
						newState.highscoremsg = "Mixed Highscore is "+newState.Points+"/"+newState.temp.length;
					}
					else{
						newState.highscoremsg = "Mixed Highscore is "+newState.HighScore+"/"+newState.temp.length;
					}
					
					if(newState.Points > newState.HighScoreNhl && newState.quiznow === 2)
					{
						newState.hsmsgnhl = "NHL Highscore is "+newState.Points+"/"+newState.temp.length;
					}
					else
					{
						newState.hsmsgnhl = "NHL Highscore is "+newState.HighScoreNhl+"/"+newState.temp.length;
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