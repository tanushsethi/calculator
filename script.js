function clicked(){
    
}

var display = document.getElementById("display-div");
var keys = document.getElementsByTagName("td");

for(var i = 0; i< keys.length ; i++){
    keys[i].addEventListener(onclick, clicked);
}

