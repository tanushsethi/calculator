
function clicked(event){
    if(event.srcElement.innerText == "AC"){
        display.innerText = "";
    }else if(event.srcElement.innerText == "+/-"){
        if(display.innerText.length!=0){
            if(display.innerText[0]=="-"){
                display.innerText = display.innerText.slice(1);
            }else{
                display.innerText = "-" + display.innerText;
            }
        }
    }
    else if(event.srcElement.innerText == "="){
        display.innerText = eval(display.innerText);
    }else{
        display.innerText += event.srcElement.innerText;
    }
}

var display = document.getElementById("display-div");
var keys = document.getElementsByTagName("span");

console.log(keys[0]);

for(var i = 0; i< keys.length ; i++){
    keys[i].addEventListener('click', clicked);
}

