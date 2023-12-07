let boxes=document.querySelectorAll(".Hello");                                                 //hume saare boxes ko select krna hai issliye queryselector ka use kr rhe
let resetbtn = document.querySelector('#reset-btn');
let newgamebtn = document.querySelector('#new-btn');
let msgcontainer=document.querySelector('.msg-container')
let Turn0 = true;                //yaha pr dono players ki turn check ki jaa rhi 

const WinPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8,]
];


const resetgame= ()=>{
    Turn0=true;
    enablebtn();
    msgcontainer.classList.add("hide");
}

// ab hum event listerns ko add karenge jisse ki hum hr click kr kuch action perfrom kr paayein

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
       // box.innerText="RA";       iska kaam hota hai box ke andar onclick text ko laana
       if(Turn0){          //for player 0 ki turn ke waqt
        box.innerText="O";
        Turn0=false;
       } else{
        box.innerText="X";
        Turn0=true;
       }
       box.disabled=true;
       CheckWinner();                                  //iska use hum winner ko search krne ke liye karenge iske liye jab bhi kisi value ki entry hogi hum , hr baar combination se check karenge for winner
    });
})

const Disablebtn= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebtn= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const ShowWinner=(winner)=>{
    msg.innerText='Congrats, The Winner is ${winner}';
    msgcontainer.classList.remove("hide");
    Disablebtn();
}

const CheckWinner= () =>{                         //arrow func.
    for(let pattern of WinPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !=""&& pos2val !=""&& pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner", pos1val);
                ShowWinner();
            }
        }

        //console.log(pattern[0],pattern[1],pattern[2]);            //yeh saare patterns ko print karega to win
       // console.log(
            //boxes[pattern[0]].innerText,pattern[1].innerText,pattern[2].innerText         //yeh winning pattern ke boxes ke innertext ko display karvaayega
       // )
    //}
}
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);