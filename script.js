
function finalResult(){
    const bringAnumberPlayer1 = Math.floor(Math.random() * 6) + 1;
    const bringAnumberPlayer2 = Math.floor(Math.random() * 6) + 1;
    const img1 = document.querySelectorAll("img")[0];
    const img2 = document.querySelectorAll("img")[1];
    const randomImageSource1 = "images/dice" + bringAnumberPlayer1 + ".png";
    const randomImageSource2 = "images/dice" + bringAnumberPlayer2 + ".png";

    img1.setAttribute("src", randomImageSource1);
    img2.setAttribute("src", randomImageSource2);   
    
    if(bringAnumberPlayer1 > bringAnumberPlayer2){
        document.querySelector("h1").innerHTML = "First Player Won!"
    }
    else if(bringAnumberPlayer1 < bringAnumberPlayer2){
        document.querySelector("h1").innerHTML = "Second Player Won!"
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!"
    }; 
}

document.querySelector(".wrapper").addEventListener("click", finalResult)
// ---------------------------

