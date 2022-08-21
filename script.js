function clicked(event){
    if(event.srcElement.id == "key-="){
        alert("hello");
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

