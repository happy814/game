
let container = document.querySelector(".msg-container")

let newbtn = document.querySelector("#New-btn")

let reset = document.querySelector("#reset");

let buttons = document.querySelectorAll(".btn");


let turnO = true; //playerX , playerO

  const winPatterns = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
  ];



buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        
    

    

        if (turnO) {
            //playerO
            btn.innerText = "O"
            
            btn.style.color="#3066BE"

            turnO = false;


        } else {// playerX
            btn.innerText = "X";
            btn.style.color="#D34F73"
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    });
});


       //disabl


const disableButtons =() => {
    for (let btn of buttons){
        btn.disabled=true;
    }
}



          //enable


const enableButtons =() => {
    for (let btn of buttons){
        btn.disabled=false;
        btn.innerText=""
    }
}





        //winner


const showWinner =(winner) => {
msg.innerText=`Congratulation, winner is ${winner}`;
container.classList.remove("hide");
disableButtons();
};



    //number check


const checkWinner = () => {
for(let pattern of winPatterns){

let posval1 = buttons[pattern[0]].innerText;
let posval2 = buttons[pattern[1]].innerText;
let posval3 =buttons[pattern[2]].innerText;

if (posval1 !="" && posval2 !=""  && posval3 !=""){
if (posval1===posval2 && posval2===posval3){
    
    showWinner(posval1);
  }
}
}
};




//reset


const resetGame = () => {
turnO = true;
enableButtons();
container.classList.add("hide");
}
 

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame)


       //reset button cooler


let game = 0;
reset.addEventListener("click" , () => {

if(game==0){
    reset.style.color="red"
    game=1;
}else{
    reset.style.color="white"
    game=0;

}

});


      //New game
   
     