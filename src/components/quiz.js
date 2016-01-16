var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');
var ch;
var quiz = React.createClass({
    propTypes: {
        quest: ptypes.func.isRequired,
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
				<div className="start">
					<h2 id='h2'>Quiz</h2>
					<button className='startbtn' onClick={this.props.start.bind(null,'1')}>Mixed Quiz</button>
					<button className='stbtn' onClick={this.props.start.bind(null,'2')}>NHL Quiz</button>
					<p id='highscoremsg'>{this.props.highscoremsg}</p>
					<p id='highscorenhl'>{this.props.hsmsgnhl}</p>
					<p id='msg'>{this.props.currentValue}</p>
				</div>
			);
		}
		else{
			if(ch === '1' || this.state.quiznumber === '3' &! ch === '2')
			{
				
			var obj = {quest:this.state.quiznumber = '3' ,answer:this.state.answer};	
				return(
					<div className="quest">
						<h2 id='h2'>Quiz</h2>
						<button className='stbtn' onClick={this.props.start.bind(null,'1')}>Reset</button>
						<p id='quest'>{this.props.qobj.quest}</p>
						<p id='pts'>Points: {this.props.Points}</p>
						<p id='cont'>
						
							<input className="radio" type="radio" name="q1" value="1" checked={this.state.answer === "1"} onChange={this.onAnswerChanged}/>{this.props.qobj.opt[0]}<br/>
							<input className="radio" type="radio" name="q1" value="2" checked={this.state.answer === "2"} onChange={this.onAnswerChanged}/>{this.props.qobj.opt[1]}<br/>
							<input className="radio" type="radio" name="q1" value="3" checked={this.state.answer === "3"} onChange={this.onAnswerChanged}/>{this.props.qobj.opt[2]}<br/>
							<button id='nxt' onClick={this.props.quest.bind(null, obj)}>Next question</button>
							
							
						</p>
						
					</div>
				);
			}
			else if(ch === '2' || this.state.quiznumber === '4' &! ch === '1')
			{
				var obj = {quest:this.state.quiznumber = '4' ,answer:this.state.answer};
				return(
					<div className='quest'>
						<h2 id='h2'>Quiz</h2>
						<button className='stbtn' onClick={this.props.start.bind(null,'2')}>Reset</button>
						<p id='quest'>{this.props.qobj.quest}</p>
						<p id='pts'>Points: {this.props.Points}</p>
						<p id='cont'>
						
							<input className="radio"  type="radio" name="q1" value="1" checked={this.state.answer === "1"} onChange={this.onAnswerChanged}/>{this.props.qobj.opt[0]}<br/>
							<input className="radio" type="radio" name="q1" value="2" checked={this.state.answer === "2"} onChange={this.onAnswerChanged}/>{this.props.qobj.opt[1]}<br/>
							<input className="radio" type="radio" name="q1" value="3" checked={this.state.answer === "3"} onChange={this.onAnswerChanged}/>{this.props.qobj.opt[2]}<br/>
							
							
							<button id='nxt' onClick={this.props.quest.bind(null,obj)}>Next question</button>
							
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
        quest: function(answer){
            dispatch(actions.quest(answer));
        },
		start: function(quiznumber){
			ch = quiznumber;
            dispatch(actions.start(quiznumber));
			
        },
		
		
		
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);