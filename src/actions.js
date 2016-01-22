/*
 This module contains action creators. They are functions which will return an object describing the actions.
 These actions are imported by Redux-aware components who need them, in our case it is just Home.
 */
var C = require('./constants'),
    Firebase = require("firebase"),
    fireRef = new Firebase(C.FIREBASE),
    mixed,
    nhl;

module.exports = {
    quest: function (quizNumber) {
        return function (dispatch, getState) {
            dispatch({type: C.ANSWER, answer: quizNumber.answer, quiznr: quizNumber.quizNumber});
            var state = getState();
            var points = state.quiz.points;
            if (!state.quiz.inProgress) {
                if (points > mixed && state.quiz.quizNow == 1) {
                    fireRef.child('highscore').set(points);
                }
                if (points > nhl && state.quiz.quizNow == 2) {
                    fireRef.child('highscorenhl').set(points);
                }
            }
        };
    },
    start: function (quizNumber) {
        return {type: C.START, quiznr: quizNumber};
    },
    // Reading highscores as an action makes for nicer coupling with redux
    readHighScores: function () {
        return function (dispatch, getState) {
            fireRef.on('value', function (snapshot) {
                var highscore = snapshot.val();
                mixed = highscore.highscore;
                nhl = highscore.highscorenhl;
                dispatch({type: C.READ_HIGHSCORES, highscores: {mixed: mixed, nhl: nhl}});
            });
        }
    }
};
