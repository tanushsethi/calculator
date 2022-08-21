function clicked(){
    if(this.id == "key-ac"){
        alert("hello");
    }
}

var display = document.getElementById("display-div");
var keys = document.getElementsByTagName("span");

// for(var i = 0; i< keys.length ; i++){
    keys[0].addEventListener(onclick, clicked);
// }

