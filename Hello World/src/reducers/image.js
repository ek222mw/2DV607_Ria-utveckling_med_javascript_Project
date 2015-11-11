var initialState = require('./../initialstate');

var ImageReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'COUNT_INC':
            newState.currentValue += 1;
            return newState;
        case 'COUNT_DEC':
            newState.currentValue -= 1;
            return newState;
        default:
            return state || initialState().ImageReducer;
    }
};

module.exports = ImageReducer;