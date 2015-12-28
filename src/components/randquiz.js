	 var _ = require('lodash');
  
	 var quest1 = {quest:"Which company bought the company King which created the game candy crush?",opt:["Valve","Microsoft","Blizzard"],CorrAns:"3"};
	 var quest2 = {quest:"In which band was Bon Scott the singer?",opt:["Iron Maiden","Metallica","AC/DC"],CorrAns:"3"};
	 var quest3 = {quest:"In which NHL team did Teemu Selänne play?",opt:["Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins"],CorrAns:"2"};
	 var quest4 = {quest:"Who has the starring in the movie Hercules in New York?",opt:["Sylvester Stallone","Dwayne The Rock Johnson", "Arnold Schwarzenegger"],CorrAns:"3"};
	 var quest5 = {quest:"Who plays the politician who becomes the boyfriend of Jennifer Lopez in the 2003 film Maid in Manhattan?",opt:["Roger Waters","Ralph Fiennes", "Emilio Rodriguez"],CorrAns:"2"};
	 var quest6 = {quest:"NV is the abbreviation for which US state?",opt:["Nevada","New Valley", "New England"],CorrAns:"1"};
	 var quest7 = {quest:"How many cards are dealt to each player in a game of Pitch?",opt:["4","5", "6"],CorrAns:"3"};
	 var quest8 = {quest:"Ophidicism is the use of which creatures for sexual pleasure?",opt:["Lizard","Snakes/eels", "Spiders"],CorrAns:"2"};
	 var quest9 = {quest:"What was the title of the 2006 Christmas episode of BBC tv's Doctor Who?",opt:["Get the doctor","Carpe diem", "The runaway bride"],CorrAns:"3"};
	 var quest10 = {quest:"In the US television show The Sopranos, who shot and killed Richie Aprile?",opt:["Janice Soprano","Julia Soprano", "Jennifer Soprano"],CorrAns:"1"};
	 
	 var quizArr = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10]
	 quizArr = _.shuffle(quizArr)
	 
	 module.exports = quizArr;
 