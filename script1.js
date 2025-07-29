const center_img = document.getElementById("center-img");

center_img.addEventListener("mouseover", (event) => {
        changeImg2gif("center-img");
        // console.log("mouse in");
    }, false,
);

center_img.addEventListener("mouseleave", (event) => {
        changeImg2png("center-img");
        // console.log("mouse out");
    }, false,
);

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