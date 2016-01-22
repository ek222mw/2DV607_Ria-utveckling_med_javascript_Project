var Redux = require('redux'),
    QuizReducer = require('./reducers/quiz'),
    initialState = require('./initialstate');
	thunk = require('redux-thunk'); // allows us to use asynchronous actions

var reducers = Redux.combineReducers({
    quiz: QuizReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports =  Redux.applyMiddleware(thunk)(Redux.createStore)(reducers,initialState());