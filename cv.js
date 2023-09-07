const text = document.querySelector(".sec-text");

function textload(){

    setTimeout( function(){
    text.textContent = "Computer Scientist";
    },0);
    setTimeout( function(){
        text.textContent = "Programmer";
        },4000);
    setTimeout( function(){
        text.textContent = "Designer";
        },8000);
    setTimeout( function(){
        text.textContent = "Front-end Developer";
        },12000);
}

textload();
setInterval(textload,16000);