var Redux = require('redux'),
    QuizReducer = require('./reducers/quiz'),
    initialState = require('./initialstate');

var reducers = Redux.combineReducers({
    quiz: QuizReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;