
var lastpositionX,lastpositionY;

canvas = document.getElementById("my_Canvas");

ctx = canvas.getContext("2d");

color = "black";

larguraLinha=1;

var width = screen.width;

newWidth = screen.width - 70;

newHeight = screen.height - 300;

if (width < 992){
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";

}

canvas.addEventListener("touchstart",MaiToatinIstrarte);

function MaiToatinIstrarte(e){
    console.log("MaiToatinIstrarte");
    color = document.getElementById("color").value;
   larguraLinha=document.getElementById("larguraLinha").value;
   lastpositionOfX = e.touches[0].clientX - canvas.offsetLeft;
   lastpositionOfY = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove",MaiToatinMuvie);

function MaiToatinMuvie(e){
    console.log("MaiToatinMuvie");
    originalpositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    originalpositionOfY = e.touches[0].clientY - canvas.offsetTop; 
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = larguraLinha;
    ctx.moveTo(lastpositionOfX,lastpositionOfY);
    ctx.lineTo( originalpositionOfX, originalpositionOfY);
    ctx.stroke();
    lastpositionOfX=originalpositionOfX;
    lastpositionOfY=originalpositionOfY;
}

function limparArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}