var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var quiz = React.createClass({
    propTypes: {
        quiz: ptypes.func.isRequired,
		start: ptypes.func.isRequired
    },
    onAnswerChanged: function(e) {
    	this.setState({ answer: e.currentTarget.value });
    },
	getInitialState: function() {
    	var quest1 = {quest:"Which company bought the company King which created the game candy crush?",opt:["Valve","Microsoft","Blizzard"],CorrAns:"Ans3"};
		var quest2 = {quest:"In which band was Bon Scott the singer?",opt:["Iron Maiden","Metallica","AC/DC"],CorrAns:"Ans3"};
		var quest3 = {quest:"In which NHL team did Teemu Selänne play?",opt:["Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins"],CorrAns:"Ans2"};
		
		var quizArr = [];
		this.props.quizArr = [];
	    this.props.quizArr.push(quest1);
	    this.props.quizArr.push(quest2);
	    this.props.quizArr.push(quest3);
		 return {on: false};
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
					<button onClick={this.props.start}>Start</button>
					
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
        },
		start: function(){
            dispatch(actions.start());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);