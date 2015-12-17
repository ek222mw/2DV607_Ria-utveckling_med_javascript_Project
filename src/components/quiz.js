var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var quiz = React.createClass({
    propTypes: {
        quiz: ptypes.func.isRequired,
		start: ptypes.func.isRequired,
		
    },
    onAnswerChanged: function(e) {
    	this.setState({ answer: e.currentTarget.value });
    },
	getInitialState: function() {
		 return {on: false};
    },
    render: function(){
		if(!this.props.Inprogress)
		{
			return (
				<div>
					<h2 id='h2'>Quiz</h2>
					<button id='startbtn' onClick={this.props.start.bind(null,'1')}>Mixed Quiz</button>
					<button id='startbtn' onClick={this.props.start.bind(null,'2')}>NHL Quiz</button>
					<p id='highscoremsg'>{this.props.highscoremsg}</p>
					<p id='msg'>{this.props.currentValue}</p>
				</div>
			);
		}
		else{
			if(ch === '1' || this.state.quiznumber === '3' &! ch === '2')
			{
			var obj = {quiz:this.state.quiznumber = '3' ,answer:this.state.answer};	
				return(
					<div>
						<h2 id='h2'>Quiz</h2>
						<p id='quest'>{this.props.question}</p>
						<p id='msg'>Message: {this.props.currentValue}</p>
						<p id='pts'>Points: {this.props.Points}</p>
						<p id='cont'>
						
							<input id='ch1' type="radio" name="q1" value="1" checked={this.state.answer === "1"} onChange={this.onAnswerChanged}/>{this.props.Choice1}<br/>
							<input id='ch2' type="radio" name="q1" value="2" checked={this.state.answer === "2"} onChange={this.onAnswerChanged}/>{this.props.Choice2}<br/>
							<input id='ch3' type="radio" name="q1" value="3" checked={this.state.answer === "3"} onChange={this.onAnswerChanged}/>{this.props.Choice3}<br/>
							<button id='nxt' onClick={this.props.quiz.bind(null, obj)}>Next question</button>
							
							
						</p>
						
					</div>
				);
			}
			else if(ch === '2' || this.state.quiznumber === '4' &! ch === '1')
			{
				var obj = {quiz:this.state.quiznumber = '4' ,answer:this.state.answer};
				return(
					<div>
						<h2 id='h2'>Quiz</h2>
						<p id='quest'>{this.props.question}</p>
						<p id='msg'>Message: {this.props.currentValue}</p>
						<p id='pts'>Points: {this.props.Points}</p>
						<p id='cont'>
						
							<input id='ch1' type="radio" name="q1" value="1" checked={this.state.answer === "1"} onChange={this.onAnswerChanged}/>{this.props.Choice1}<br/>
							<input id='ch2' type="radio" name="q1" value="2" checked={this.state.answer === "2"} onChange={this.onAnswerChanged}/>{this.props.Choice2}<br/>
							<input id='ch3' type="radio" name="q1" value="3" checked={this.state.answer === "3"} onChange={this.onAnswerChanged}/>{this.props.Choice3}<br/>
							
							
							<button id='nxt' onClick={this.props.quiz.bind(null,obj)}>Next question</button>
							
						</p>
						
					</div>
				);
			}
		}
        
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
		start: function(quiznumber){
			ch = quiznumber;
            dispatch(actions.start(quiznumber));
			
        },
		
		
		
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);