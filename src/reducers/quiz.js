var initialState = require('./../initialstate');

var QuizReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'Pressed':
            if(document.getElementById('Ans3').checked)
			{
				newState.currentValue = "Correct";
			}
			else{
				newState.currentValue = "False";
			}
            return newState;
        default:
            return state || initialState().quiz;
    }
};

module.exports = QuizReducer;