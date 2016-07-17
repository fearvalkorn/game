var semafor = document.querySelector("#semafor");
var semafor1 = document.querySelector("#semafor1");
var semafor2 = document.querySelector("#semafor2");
var semafor3 = document.querySelector("#semafor3");

var loop;

loop = setInterval(match, 2000);

 function match(){
 	var randomTeam1 = Math.floor(Math.random() * team1.length);
 	var randomTeam2 = Math.floor(Math.random() * team2.length);
 	var currentP1 = team1[randomTeam1];
 	var currentP2 = team2[randomTeam2];
 	semafor.innerHTML = "Igrac " + currentP1.name + "(" + currentP1.height + ")" + " skace za loptu sa " + currentP2.name + "(" + currentP2.height + ")"
 


 	if (currentP1.height > currentP2.height) {
 		semafor1.innerHTML = "Loptu je uzeo " + currentP1.name + " i krece u napad";
 		semafor2.innerHTML = "Loptu vodi "+ currentP1.name;
 		semafor3.innerHTML = currentP1.name + " sutira "
 	}else{
	 	semafor1.innerHTML = "Loptu je uzeo " + currentP2.name + " i krece u napad";
	 	semafor2.innerHTML = "Loptu vodi "+ currentP2.name;
	 	semafor3.innerHTML = currentP2.name + " sutira "
	}









 } 