window.onload=function(){
    const titleCh = document.getElementById("titleWord");
    titleCh.onclick = function() {
        this.innerHTML = "Have a Good Time!";
    };




        


    
    const hid = document.getElementById("box2");
    const btn = document.getElementById("button");
    btn.onclick = function() {
        if ( hid.style.display === "flex") {
            hid.style.display = "none";
        } else {
            hid.style.display = "flex";
        }
    };
}
