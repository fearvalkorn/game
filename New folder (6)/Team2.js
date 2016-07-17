var team2 = [];

function CreatePlayer1(){
	this.name = makePlayer1();
	this.height = makeHeightP1();
    this.preciznost = makePreciznost1();
}
function CreatePlayer2(){
	this.name = makePlayer2();
	this.height = makeHeightP2();
	this.preciznost = makePreciznost2();
}





function makePlayer1(){
	var rezultat = "Uros"
	return rezultat;
}
function makePlayer2(){
	var rezultat = "Nikola"
	return rezultat;
}
function makeHeightP1(){
	var rezultat = 91
	return rezultat;
}
function makeHeightP2(){
	var rezultat = 63
	return rezultat;
}
function makePreciznost1(){
	var rezultat = 40
	return rezultat;
}
function makePreciznost2(){
	var rezultat = 90
	return rezultat;
}


    var player1 = new CreatePlayer1();
    team2.push(player1);
    var player2 = new CreatePlayer2();
    team2.push(player2)

console.log(team2)