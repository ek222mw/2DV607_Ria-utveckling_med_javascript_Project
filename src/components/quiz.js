var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var quiz = React.createClass({
    propTypes: {
        quiz: ptypes.func.isRequired
    },
    render: function(){
        return (
            <div>
                <h2>Quiz</h2>
				<p>In which band was Bon Scott the singer? </p>
                <p>Message: {this.props.currentValue}</p>
                <p>
				
					<input type="radio" name="q1" id="Ans1" value="1"/>Iron Maiden<br/>
					<input type="radio" name="q1" id="Ans2" value="2"/>Metallica<br/>
					<input type="radio" name="q1" id="Ans3" value="3"/>AC/DC<br/>
				
                    <button onClick={this.props.quiz}>Next question</button>
					
                </p>
            </div>
        );
    }
});

var mapStateToProps = function(state){
    return state.quiz;
};

var mapDispatchToProps = function(dispatch){
    return {
        quiz: function(){
            dispatch(actions.quiz());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);