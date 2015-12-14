var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var quiz = React.createClass({
    propTypes: {
        quiz: ptypes.func.isRequired,
		start: ptypes.func.isRequired,
		startnhlquiz: ptypes.func.isRequired,
		nhlquiz: ptypes.func.isRequired,
		highscore: ptypes.func.isRequired
    },
    onAnswerChanged: function(e) {
    	this.setState({ answer: e.currentTarget.value });
    },
	getInitialState: function() {
		 return {on: false};
    },
    render: function(){
        return (
            <div >
                <h2 id='h2'>Quiz</h2>
				<button id='startbtn' onClick={this.props.start}>Mixed Quiz</button>
				<button id='startbtnNHL' onClick={this.props.startnhlquiz}>NHL Quiz</button>
				<button id='highscore' onClick={this.props.highscore}>Highscores</button>
				<p id='highscoremsg'>{this.props.highscoremsg}</p>
				<p id='quest'>{this.props.question}</p>
                <p id='msg'>Message: {this.props.currentValue}</p>
				<p id='pts'>Points: {this.props.Points}</p>
                <p id='cont'>
				
					<input id='ch1' type="radio" name="q1" value="1" checked={this.state.answer === "1"} onChange={this.onAnswerChanged}/>{this.props.Choice1}<br/>
					<input id='ch2' type="radio" name="q1" value="2" checked={this.state.answer === "2"} onChange={this.onAnswerChanged}/>{this.props.Choice2}<br/>
					<input id='ch3' type="radio" name="q1" value="3" checked={this.state.answer === "3"} onChange={this.onAnswerChanged}/>{this.props.Choice3}<br/>
				
                    <button id='nxt' onClick={this.props.quiz.bind(null, this.state.answer)}>Next question</button>
					<button id='nxtNHL' onClick={this.props.nhlquiz.bind(null, this.state.answer)}>Next</button>
					
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
        },
		startnhlquiz: function(){
            dispatch(actions.startnhlquiz());
        },
		nhlquiz: function(answer){
            dispatch(actions.nhlquiz(answer));
        },
		highscore: function(){
            dispatch(actions.highscore());
        }
		
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);