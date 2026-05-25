/*
 *HTML elements
 */
let myGraffiti = document.getElementById("my-graffiti");
let surface = myGraffiti.getContext("2d");
let cleanButton=document.getElementById("clean")
/*
 *Graffiti style
 */
surface.lineWidth = 13;
surface.lineJoin = "round"
surface.strokeStyle = "red";

/*
 *shapes
 */
function shapes() {
    surface.rect(150, 200, 100, 100);
    surface.stroke();

    surface.beginPath();
    surface.moveTo(200, 50);
    surface.lineTo(150, 200);
    surface.closePath();
    surface.stroke();

    surface.beginPath();
    surface.moveTo(250, 50);
    surface.lineTo(350, 50);
    surface.moveTo(350, 50);
    surface.lineTo(270, 300);
    surface.closePath();
    surface.stroke();

}
shapes();
/*
 *Clean
 */
function Clean(){
surface.clearRect(0,0,400,400);
}

cleanButton.addEventListener("click", Clean);