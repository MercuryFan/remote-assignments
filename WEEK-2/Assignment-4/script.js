window.onload=function(){
    const titleCh = document.getElementById("titleWord");
    titleCh.onclick = function() {
        this.innerHTML = "Have a Good Time!";
    };
    
    let hid = document.getElementById("box2");
    let btn = document.getElementById("button");
    btn.onclick = function() {
        console.log(hid.style.display);
        if ( hid.style.display === "flex") {
            hid.style.display = "none";
        } else {
            hid.style.display = "flex";
        }
    };
}



