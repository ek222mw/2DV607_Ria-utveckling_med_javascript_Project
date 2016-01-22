var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    chosenQuizNumber;

var quiz = React.createClass({
    propTypes: {
        answerQuestion: ptypes.func.isRequired,
        start: ptypes.func.isRequired
    },
    onAnswerChanged: function (e) {
        // Converting to number here prevents any other type problems
        this.setState({answer: Number(e.currentTarget.value)});
    },
    getInitialState: function () {
        return {on: false};
    },
    render: function () {
        var obj;
        var props = this.props;
        var state = this.state;
        var onAnswerChanged = this.onAnswerChanged;

        if (!props.inProgress) {
            return (
                <div className="start">
                    <h2 id='h2'>Quiz</h2>
                    <button className='startbtn' onClick={props.start.bind(null,1)}>Mixed Quiz</button>
                    <button className='stbtn' onClick={props.start.bind(null,2)}>NHL Quiz</button>
                    <p id='highscoremsg'>{props.highscoremsg}</p>
                    <p id='highscorenhl'>{props.hsmsgnhl}</p>
                    <p id='msg'>{props.scoreMessage}</p>
                </div>
            );
        }
        else {
            obj = {quizNumber: chosenQuizNumber, answer: state.answer};
            var radiobuttons = this.props.QuestionObject.opt.map(function (option, index) {
                return (<div key={index}><label>
                    <input type="radio" className="radio" name="q1" value={index}
                           checked={state.answer === index}
                           onChange={onAnswerChanged}/>{props.QuestionObject.opt[index]}</label></div>);
            });
            return (
                <div className="quest">
                    <h2 id='h2'>Quiz</h2>
                    <p id='quest'>{props.QuestionObject.question}</p>
                    <p id='pts'>Points: {props.points}</p>
                    <div id='cont'>
                        {radiobuttons}
                        <button id='nxt' onClick={props.answerQuestion.bind(null, obj)}>Next question</button>
                    </div>
                </div>
            );
        }
    }
});

var mapStateToProps = function (state) {
    return state.quiz;
};
var mapDispatchToProps = function (dispatch) {
    return {
        answerQuestion: function (answer) {
            dispatch(actions.quest(answer));
        },
        start: function (quizNumber) {
            chosenQuizNumber = quizNumber;
            dispatch(actions.start(quizNumber));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(quiz);