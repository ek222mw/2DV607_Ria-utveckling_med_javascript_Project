var _ = require('lodash');

var question1 = {
    question: "In which NHL team did Teemu Selänne play?",
    opt: ["Chicago Blackhawks", "Anaheim Mighty Ducks", "Boston Bruins"],
    corrAns: 1
};
var question2 = {
    question: "In which team did Patrick Roy play?",
    opt: ["New York Rangers", "Colorado Avalanche", "Philadelphia Flyers"],
    corrAns: 1
};
var question3 = {
    question: "Which player has most points ever in NHL?",
    opt: ["Wayne Gretzky", "Mark Messier", "Mario Lemieux"],
    corrAns: 0
};
var question4 = {
    question: "Which swedish player has most points in NHL history?",
    opt: ["Peter Forsberg", "Mats Sundin", "Börje Salming"],
    corrAns: 1
};
var question5 = {
    question: "Which goalie has most wins in NHL history?",
    opt: ["Patrick Roy", "Ed Belfour", "Martin Brodeur"],
    corrAns: 2
};
var question6 = {
    question: "Which player has most penalty minutes?",
    opt: ["Mike Peluso", "Paul Baxter", "Dave Schultz"],
    corrAns: 2
};
var question7 = {
    question: "Which player has most points in a rookie season?",
    opt: ["Teemu Selänne", "Wayne Gretzky", "Mario Lemieux"],
    corrAns: 0
};
var question8 = {
    question: "Fastest goal in NHL?",
    opt: ["4 seconds", "5 seconds", "6 seconds"],
    corrAns: 1
};
var question9 = {
    question: "Most penalty minutes by a goalie?",
    opt: ["Rox Hextall", "Patrick Roy", "Jacques Plante"],
    corrAns: 0
};
var question10 = {
    question: "Most games in NHL?",
    opt: ["Wayne Gretzky", "Mario Lemieux", "Gordie Howe"],
    corrAns: 2
};

var nhlquiz = _.shuffle([question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]);

module.exports = nhlquiz;
 