item = localStorage.getItem("Player_1");
item1 = localStorage.getItem("Player_2");
console.log(item);
console.log(item1);
function game(){
document.getElementById("player1_name").innerHTML = item+":";
document.getElementById("player2_name").innerHTML = item1+":";
document.getElementById("player_question").innerHTML ="Question turn-"+ item;
document.getElementById("player_answer").innerHTML = "Answer Turn-"+item1;
}