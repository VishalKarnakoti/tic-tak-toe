let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".Reset");
let newGameBtn=document.querySelector("#button");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turno=true;

const winPatterns= [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turno){
            box.innerText="o"
            turno=false;
        }
        else{
            box.innerText="x";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
        
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}; 
const showWinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
for(let pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val==pos2val&&pos2val==pos3val){
            
            showWinner(pos1val);
        }
    }
}

};
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
