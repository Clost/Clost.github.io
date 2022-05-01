"use strict";

let speed= 250;
let animFrame="";
let frame=0;
let animTimer=null;
let animation="";

let frameAnim= function()
{
    document.getElementById("text-area").value = animFrame[frame];

    if(frame == animFrame.length - 1)
      {frame=0;}
    else {frame ++;}

    clearInterval(animTimer);
    animate();
}

let animate = function()
{
    animTimer= setInterval(frameAnim, speed);
}

let start = function()
{
    frame=0;

    if(document.getElementById("start").disabled==false)
    {
        document.getElementById("start").disabled=true;
        if(document.getElementById("stop").disabled==true)
        {
            document.getElementById("stop").disabled=false;
        }

        animFrame = animation.split("=====\n");
        animate();  
    }
}

let stop= function ()
{
    if(document.getElementById("stop").disabled==false)
    {
        document.getElementById("stop").disabled=true;
        document.getElementById("start").disabled=false;
        
        clearInterval(animTimer);
        document.getElementById("text-area").value="";
    }
} 

let changeAnim = function()
{
    stop();
    let animSelected= document.getElementById("animation").value;
    animation = ANIMATIONS[animSelected];
    document.getElementById("text-area").value="";
}

let fontsize = function()
{
    let textArea= document.getElementById("text-area");
    let fontsize= document.getElementById("fontsize").value;
    textArea.style.fontSize= fontsize;
}


let turbo = function()
{
    let turbo= document.getElementById("turbo");
    if(turbo.checked)
       speed=50
    else
       speed=250;
}

function main() {
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
    document.getElementById("animation").onchange = changeAnim;
    document.getElementById("fontsize").onchange = fontsize;
    document.getElementById("turbo").onchange = turbo;
}

window.onload = main;