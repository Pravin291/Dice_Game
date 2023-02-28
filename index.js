var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+randomnumber1+".png";

var randomSource="Images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomSource);


var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+randomnumber2+".png";

var randomSource="Images/"+randomDiceImage;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomSource);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩🚩Play 1 wins!";
}

else if (randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Play 2 wins!🚩🚩";
}

else{
         document.querySelector("h1").innerHTML="Draw!!";
}