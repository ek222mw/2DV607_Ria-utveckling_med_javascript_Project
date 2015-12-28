

/*
This module contains action creators. They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them, in our case it is just Home.
*/
var C = require('./constants');
Firebase = require("firebase"),
fireRef = new Firebase(C.FIREBASE);
var mixed;
var nhl;
fireRef.on("value", function(snapshot) {
					
					var highscore = snapshot.val();
					mixed = highscore.highscore;
					nhl = highscore.highscorenhl;
					
			});
module.exports = {
   quest: function(quiznumber){
   return function(dispatch,getState){
	   dispatch({type: quiznumber.quest, answer: quiznumber.answer});
			var newState = getState();
			
			newState.quiz.HighScore = mixed;
			newState.quiz.HighScoreNhl = nhl;
			
			if(newState.quiz.Points > mixed && newState.quiz.quiznow == 1)
			{
				
				fireRef.child('highscore').set(newState.quiz.Points);
						
				newState.quiz.highscoremsg = "Mixed Highscore is "+newState.quiz.Points+"/"+newState.quiz.temp.length;
				
			}
			else{
				newState.quiz.highscoremsg = "Mixed Highscore is "+newState.quiz.HighScore+"/"+newState.quiz.temp.length;
			}
			
			if(newState.quiz.Points > nhl && newState.quiz.quiznow == 2)
			{
				
				fireRef.child('highscorenhl').set(newState.quiz.Points);
				
				newState.quiz.hsmsgnhl = "NHL Highscore is "+newState.quiz.Points+"/"+newState.quiz.temp.length;
				
			}
			else
			{
				newState.quiz.hsmsgnhl = "NHL Highscore is "+newState.quiz.HighScoreNhl+"/"+newState.quiz.temp.length;
			}
			
			
		};
   
   },

   start: function(quiznumber){
          return {type:quiznumber};
      },
  };
