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
    switch(action.type){
		case '1':
		{
			newState.Inprogress = true;
			
			newState.Points = 0;
			newState.currentValue ="";
			newState.pos = 0;
			newState.Choice1 = quizArr[newState.pos].opt[0];
			newState.question = quizArr[newState.pos].quest;
			newState.Choice2 = quizArr[newState.pos].opt[1];
			newState.Choice3 = quizArr[newState.pos].opt[2];
			return newState;
		}
		
		case '2':
		{
			newState.Inprogress = true;
			
			newState.Points = 0;
			newState.currentValue ="";
			newState.pos = 0;
			newState.Choice1 = nhlquiz[newState.pos].opt[0];
			newState.question = nhlquiz[newState.pos].quest;
			newState.Choice2 = nhlquiz[newState.pos].opt[1];
			newState.Choice3 = nhlquiz[newState.pos].opt[2];
			return newState;
		}
		
        case '3':
			
			if(quizArr.length-1 === newState.pos)
			{
				newState.Inprogress = false;
				if(action.answer === quizArr[newState.pos].CorrAns)
				{
					newState.Points++;
				}
				newState.currentValue = "You score was "+newState.Points+"/"+quizArr.length;
				newState.hsmsgnhl = "NHL Highscore is "+newState.HighScoreNhl+"/"+3;
				if(newState.Points > mixed)
				{
					fireRef.child('highscore').set(newState.Points);
					
					newState.highscoremsg = "Mixed Highscore is "+newState.Points+"/"+quizArr.length;
					
				}
				else
				{
					newState.highscoremsg = "Mixed Highscore is "+newState.HighScore+"/"+quizArr.length;
				}
			
				return newState;
			
			}
			
			
            else if(action.answer === quizArr[newState.pos].CorrAns)
			{
				newState.Points++;
				newState.currentValue = "Correct";
				newState.pos++;
				
				
				newState.Choice1 = quizArr[newState.pos].opt[0];
				newState.question = quizArr[newState.pos].quest;
				newState.Choice2 = quizArr[newState.pos].opt[1];
				newState.Choice3 = quizArr[newState.pos].opt[2];
				return newState;
				
			}
			else{
				newState.currentValue = "False";
				newState.pos++;
				
				
				newState.Choice1 = quizArr[newState.pos].opt[0];
				newState.question = quizArr[newState.pos].quest;
				newState.Choice2 = quizArr[newState.pos].opt[1];
				newState.Choice3 = quizArr[newState.pos].opt[2];
				return newState;
				
			}
    
	 case '4':
			
			if(nhlquiz.length-1 === newState.pos)
			{
				newState.Inprogress = false;
				if(action.answer === nhlquiz[newState.pos].CorrAns)
				{
					newState.Points++;
				}
				newState.currentValue = "You score was "+newState.Points+"/"+nhlquiz.length;
				newState.highscoremsg = "Mixed Highscore is "+newState.HighScore+"/"+3;
				if(newState.Points > nhl)
				{
					fireRef.child('highscorenhl').set(newState.Points);
					
					newState.hsmsgnhl = "NHL Highscore is "+newState.Points+"/"+nhlquiz.length;
					
				}
				else
				{
					newState.hsmsgnhl = "NHL Highscore is "+newState.HighScoreNhl+"/"+nhlquiz.length;
				}
				
				return newState;
			}
			
			
            else if(action.answer === nhlquiz[newState.pos].CorrAns)
			{
				newState.Points++;
				newState.currentValue = "Correct";
				newState.pos++;
				
				
				newState.Choice1 = nhlquiz[newState.pos].opt[0];
				newState.question = nhlquiz[newState.pos].quest;
				newState.Choice2 = nhlquiz[newState.pos].opt[1];
				newState.Choice3 = nhlquiz[newState.pos].opt[2];
				return newState;
				
			}
			else{
				newState.currentValue = "False";
				newState.pos++;
				
				
				newState.Choice1 = nhlquiz[newState.pos].opt[0];
				newState.question = nhlquiz[newState.pos].quest;
				newState.Choice2 = nhlquiz[newState.pos].opt[1];
				newState.Choice3 = nhlquiz[newState.pos].opt[2];
				return newState;
				
			}
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;