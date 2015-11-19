var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var quiz = React.createClass({
    propTypes: {
        quiz: ptypes.func.isRequired
    },
    onAnswerChanged: function(e) {
    	this.setState({ answer: e.currentTarget.value });
    },
	getInitialState: function() {
    	return { answer: "Ans1" }
    },
    render: function(){
        return (
            <div>
                <h2>Quiz</h2>
				<p>{this.props.question}</p>
                <p>Message: {this.props.currentValue}</p>
				<p>Points: {this.props.Points}</p>
                <p>
				
					<input type="radio" name="q1" value="Ans1" checked={this.state.answer === "Ans1"} onChange={this.onAnswerChanged}/>{this.props.Choice1}<br/>
					<input type="radio" name="q1" value="Ans2" checked={this.state.answer === "Ans2"} onChange={this.onAnswerChanged}/>{this.props.Choice2}<br/>
					<input type="radio" name="q1" value="Ans3" checked={this.state.answer === "Ans3"} onChange={this.onAnswerChanged}/>{this.props.Choice3}<br/>
				
                    <button onClick={this.props.quiz.bind(null, this.state.answer)}>Next question</button>
					
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
        quiz: function(answer){
            dispatch(actions.quiz(answer));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);