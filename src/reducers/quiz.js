var initialState = require('./../initialstate');
var _ = require('lodash');
var quizArr = require('./../data/randquiz');
var nhlquiz = require('./../data/nhlquiz');
var C = require('./../constants');


var QuizReducer = function (state, action) {
    var newState = Object.assign({}, state);
    var quizes = [quizArr, nhlquiz];

    switch (action.type) {
        case C.START:
            Object.assign({}, state, {
                inProgress: true,
                points: 0,
                quizQuestion: 0,
                scoreMessage: "",
                QuestionObject: quizes[action.quiznr - 1][newState.quizQuestion],
                chosenQuiz: quizes[action.quiznr - 1],
                quizNow: action.quiznr
            });

            return newState;
        case C.ANSWER:
            // Might as well add points right now, since both branches makes use of it
            if (action.answer === newState.QuestionObject.corrAns) {
                newState.points++;
            }
            // If we are on the last question
            if (newState.chosenQuiz.length - 1 === newState.quizQuestion) {
                newState.inProgress = false;

                var p1 = newState.points > newState.highScore ? newState.points : newState.highScore;
                newState.highscoremsg = "Mixed Highscore is " + p1 + "/" + newState.chosenQuiz.length;

                var p2 = newState.points > newState.highScoreNHL ? newState.points : newState.highScoreNHL;
                newState.hsmsgnhl = "NHL Highscore is " + p2 + "/" + newState.chosenQuiz.length;

                newState.scoreMessage = "Your score was " + newState.points + "/" + newState.chosenQuiz.length;
            }
            else {
                newState.quizQuestion++;
                newState.QuestionObject = newState.chosenQuiz[newState.quizQuestion];
            }
            return newState;
        case C.READ_HIGHSCORES:
            return Object.assign({}, state, {
                highScore: action.highscores.mixed,
                highScoreNHL: action.highscores.nhl
            });
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;