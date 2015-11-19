var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var quiz = React.createClass({
    propTypes: {
        quiz: ptypes.func.isRequired
    },
    getInitialState: function() {
    	return { answer: "Ans1" }
    },
    onAnswerChanged: function(e) {
    	this.setState({ answer: e.currentTarget.value });
    },
    render: function(){
        return (
            <div>
                <h2>Quiz</h2>
				<p>In which band was Bon Scott the singer? </p>
                <p>Message: {this.props.currentValue}</p>
                <p>
				
					<input type="radio" name="q1" value="Ans1" checked={this.state.answer === "Ans1"} onChange={this.onAnswerChanged}/>Iron Maiden<br/>
					<input type="radio" name="q1" value="Ans2" checked={this.state.answer === "Ans2"} onChange={this.onAnswerChanged}/>Metallica<br/>
					<input type="radio" name="q1" value="Ans3" checked={this.state.answer === "Ans3"} onChange={this.onAnswerChanged}/>AC/DC<br/>
				
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