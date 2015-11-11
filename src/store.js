var Redux = require('redux'),
    Image = require('./reducers/image'),
    initialState = require('./initialstate');

var reducers = Redux.combineReducers({
    ImageReducer: Image
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;