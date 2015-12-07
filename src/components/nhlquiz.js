	 var _ = require('lodash');
  
	 var quest1 = {quest:"In which NHL team did Teemu Selänne play?",opt:["Chicago Blackhawks","Anaheim Mighty Ducks", "Boston Bruins"],CorrAns:"2"};
	 var quest2 = {quest:"In which team did Patrick Roy play?",opt:["New York Rangers","Colorado Avalanche","Philadelphia Flyers"],CorrAns:"2"};
	 var quest3 = {quest:"Which player has most points ever in NHL?",opt:["Wayne Gretzky","Mark Messier", "Mario Lemieux"],CorrAns:"1"};
	 
	 var nhlquiz = [quest1, quest2, quest3]
	 nhlquiz = _.shuffle(nhlquiz)
	 
	 module.exports = nhlquiz;
 