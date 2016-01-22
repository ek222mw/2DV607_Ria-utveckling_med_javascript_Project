var _ = require('lodash');

var question1 = {
    question: "Which company bought the company King which created the game candy crush?",
    opt: ["Valve", "Microsoft", "Blizzard"],
    corrAns: 2
};
var question2 = {
    question: "In which band was Bon Scott the singer?",
    opt: ["Iron Maiden", "Metallica", "AC/DC"],
    corrAns: 2
};
var question3 = {
    question: "In which NHL team did Teemu Selänne play?",
    opt: ["Chicago Blackhawks", "Anaheim Mighty Ducks", "Boston Bruins"],
    corrAns: 1
};
var question4 = {
    question: "Who has the starring in the movie Hercules in New York?",
    opt: ["Sylvester Stallone", "Dwayne The Rock Johnson", "Arnold Schwarzenegger"],
    corrAns: 2
};
var question5 = {
    question: "Who plays the politician who becomes the boyfriend of Jennifer Lopez in the 2003 film Maid in Manhattan?",
    opt: ["Roger Waters", "Ralph Fiennes", "Emilio Rodriguez"],
    corrAns: 1
};
var question6 = {
    question: "NV is the abbreviation for which US state?",
    opt: ["Nevada", "New Valley", "New England"],
    corrAns: 0
};
var question7 = {
    question: "How many cards are dealt to each player in a game of Pitch?",
    opt: ["4", "5", "6"],
    corrAns: 2
};
var question8 = {
    question: "Ophidicism is the use of which creatures for sexual pleasure?",
    opt: ["Lizard", "Snakes/eels", "Spiders"],
    corrAns: 1
};
var question9 = {
    question: "What was the title of the 2006 Christmas episode of BBC tv's Doctor Who?",
    opt: ["Get the doctor", "Carpe diem", "The runaway bride"],
    corrAns: 2
};
var question10 = {
    question: "In the US television show The Sopranos, who shot and killed Richie Aprile?",
    opt: ["Janice Soprano", "Julia Soprano", "Jennifer Soprano"],
    corrAns: 0
};

var quizArr = _.shuffle([question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]);

module.exports = quizArr;
