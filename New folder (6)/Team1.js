var team1 = [];

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
	var rezultat = "Danilo"
	return rezultat;
}
function makePlayer2(){
	var rezultat = "Marko"
	return rezultat;
}
function makeHeightP1(){
	var rezultat = 78
	return rezultat;
}
function makeHeightP2(){
	var rezultat = 80
	return rezultat;
}
function makePreciznost1(){
	var rezultat = 70
	return rezultat;
}
function makePreciznost2(){
	var rezultat = 60
	return rezultat;
}


    var player1 = new CreatePlayer1();
    team1.push(player1);
    var player2 = new CreatePlayer2();
    team1.push(player2)

console.log(team1)