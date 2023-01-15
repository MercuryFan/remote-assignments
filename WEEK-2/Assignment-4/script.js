

window.onload=function(){
    const greet = document.getElementById("greet");
    greet.onclick = function() {
        this.innerHTML = "Have a Good Time!";
    }

    
    
    const hid= document.getElementById("box2");
    const btn = document.getElementById("button");
    console.log(btn);
    
    btn.onclick = function() {
        if ( hid.style.display !== "none") {
            hid.style.display = "none";
        } else {
            hid.style.display = "flex";
        }
    };
}