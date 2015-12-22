var initialState = require('./../initialstate');
var _ = require('lodash');
var quizArr = require('./../components/randquiz');
var nhlquiz = require('./../components/nhlquiz');
var C = require('./../constants');
Firebase = require("firebase"),
fireRef = new Firebase(C.FIREBASE);
var mixed;
var nhl;
fireRef.on("value", function(snapshot) {
					
					var highscore = snapshot.val();
					mixed = highscore.highscore;
					nhl = highscore.highscorenhl;
					
});
var QuizReducer = function(state, action){
	
		var newState = Object.assign({}, state);
		newState.HighScore = mixed;
		newState.HighScoreNhl = nhl;
	
		if(action.type == '1')
		{
			newState.pos = 0;
			newState.qobj = quizArr[newState.pos];
			newState.temp = quizArr;
		}
		else if(action.type == '2'){
			newState.pos = 0;
			newState.qobj = nhlquiz[newState.pos];
			newState.temp = nhlquiz;
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
					
					if(newState.Points > mixed && action.type == '3')
					{
						fireRef.child('highscore').set(newState.Points);
						
						newState.highscoremsg = "Mixed Highscore is "+newState.Points+"/"+newState.temp.length;
						
					}
					else
					{
						newState.highscoremsg = "Mixed Highscore is "+newState.HighScore+"/"+newState.temp.length;
					}
					
					if(newState.Points > nhl && action.type == '4')
					{
						fireRef.child('highscorenhl').set(newState.Points);
						
						newState.hsmsgnhl = "NHL Highscore is "+newState.Points+"/"+newState.temp.length;
						
					}
					else
					{
						newState.hsmsgnhl = "NHL Highscore is "+newState.HighScoreNhl+"/"+newState.temp.length;
					}
					
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