	 var _ = require('lodash');
  
	 var quest1 = {quest:"In which NHL team did Teemu Selänne play?",opt:["Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins"],CorrAns:"2"};
	 var quest2 = {quest:"In which team did Patrick Roy play?",opt:["New York Rangers","Colorado Avalanche","Philadelphia Flyers"],CorrAns:"2"};
	 var quest3 = {quest:"Which player has most points ever in NHL?",opt:["Wayne Gretzky","Mark Messier", "Mario Lemieux"],CorrAns:"1"};
	 var quest4 = {quest:"Which swedish player has most points in NHL history?",opt:["Peter Forsberg","Mats Sundin", "Börje Salming"],CorrAns:"2"};
	 var quest5 = {quest:"Which goalie has most wins in NHL history?",opt:["Patrick Roy","Ed Belfour", "Martin Brodeur"],CorrAns:"3"};
	 var quest6 = {quest:"Which player has most penalty minutes?",opt:["Mike Peluso","Paul Baxter", "Dave Schultz"],CorrAns:"3"};
	 var quest7 = {quest:"Which player has most points in a rookie season?",opt:["Teemu Selänne","Wayne Gretzky", "Mario Lemieux"],CorrAns:"1"};
	 var quest8 = {quest:"Fastest goal in NHL?",opt:["4 seconds","5 seconds", "6 seconds"],CorrAns:"2"};
	 var quest9 = {quest:"Most penalty minutes by a goalie?",opt:["Rox Hextall","Patrick Roy", "Jacques Plante"],CorrAns:"1"};
	 var quest10 = {quest:"Most games in NHL?",opt:["Wayne Gretzky","Mario Lemieux", "Gordie Howe"],CorrAns:"3"};
	 
	 var nhlquiz = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10]
	 nhlquiz = _.shuffle(nhlquiz)
	 
	 module.exports = nhlquiz;
 