//Check for the last element for special Chars
function checkLast(){
    if(display.innerText.length!=0){
        var last = display.innerText[display.innerText.length-1];
        last = last.charCodeAt(0);
        if(last >=33 && last<=47){
            return false;
        }
    }
    return true;
}
//When clicked on span
function clicked(event){
    var c = event.srcElement.innerText.charCodeAt(0);
    //If AC Clicked
    if(event.srcElement.innerText == "AC"){
        display.innerText = "";
    //If Special Char clicked at start except(-)
    }else if(c >=33 && c<=47 && c!=45 && display.innerText.length==0){
            return;
    //If +/- Clicked
    }else if(event.srcElement.innerText == "+/-"){
        if(display.innerText.length!=0){
            if(display.innerText[0]=="-"){
                display.innerText = display.innerText.slice(1);
                if(checkLast()){
                    smallDisplay.innerText = "=" + eval(display.innerText);
                }
            }else{
                display.innerText = "-" + display.innerText;
                if(checkLast()){
                    smallDisplay.innerText = "=" + eval(display.innerText);
                }
            }
        }
    }
    //If = Clicked
    else if(event.srcElement.innerText == "="){
        display.innerText = eval(display.innerText);
        smallDisplay.innerText = "";
    //If any number clicked
    }else{
        if(display.innerText.length!=0){
            var last = display.innerText[display.innerText.length-1];
            last = last.charCodeAt(0);
            var ch = event.srcElement.innerText;
            ch = ch.charCodeAt(0);
            console.log(last, ch);
            if(last >=33 && last<=47 && ch >=33 && ch<=47){
                return;
            }
        }
        display.innerText += event.srcElement.innerText;
        smallDisplay.innerText = "=" + eval(display.innerText);
    }
}

var display = document.getElementById("display-div");
var smallDisplay = document.getElementById("eval-dis");
var keys = document.getElementsByTagName("span");
for(var i = 0; i< keys.length ; i++){
    keys[i].addEventListener('click', clicked);
}

