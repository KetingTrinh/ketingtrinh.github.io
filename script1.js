const center_img = document.getElementById("center-img");

center_img.addEventListener("mouseover", (event) => {
        var audio = new Audio('assets/orch-hit.mp3')
        changeImg2gif("center-img");
        test()
        
        audio.play()
        console.log("BAM");
    }, false,
);

center_img.addEventListener("mouseleave", (event) => {
        changeImg2png("center-img");
        test()
        // console.log("mouse out");
    }, false,
);

function givemeaudio(){
    var audio = new Audio('assets/taco-bell.mp3')
    audio.play()
}

function test(){
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == "style1.css"){
        theme.setAttribute('href', "style2.css") 
    }
    else{
        theme.setAttribute('href','style1.css')
    }
    
}

function changeImg2gif(idname){
    var a = document.getElementById(idname).src;
    var b = a.replace(".png",".gif")
    document.getElementById("center-img").src = b;
}
function changeImg2png(idname){
    var a = document.getElementById(idname).src;
    var b = a.replace(".gif",".png");
    document.getElementById("center-img").src = b;
}