document.querySelector(".btn").addEventListener("click", loveCalculator);

function loveCalculator () {

  var loveScore = Math.random() * 100;

  loveScore = Math.floor(loveScore)+1;

  document.querySelector("p").innerHTML = "Your love score is " + loveScore + "%";

}
