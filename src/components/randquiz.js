	 var _ = require('lodash');
  
	 var quest1 = {quest:"Which company bought the company King which created the game candy crush?",opt:["Valve","Microsoft","Blizzard"],CorrAns:"3"};
	 var quest2 = {quest:"In which band was Bon Scott the singer?",opt:["Iron Maiden","Metallica","AC/DC"],CorrAns:"3"};
	 var quest3 = {quest:"In which NHL team did Teemu Selänne play?",opt:["Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins"],CorrAns:"2"};
	 
	 var quizArr = [quest1, quest2, quest3]
	 quizArr = _.shuffle(quizArr)
	 
	 module.exports = quizArr;
 