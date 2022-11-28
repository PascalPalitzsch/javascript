// Canvas API = a means for drawing graphics
// used for animation, games, data visualization


let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

// Draw Lines
/*
context.strokeStyle = "blue";
context.lineWidth = 5;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/


// Draw Triangles
/*
context.strokeStyle = "grey";
context.fillStyle = "yellow";
context.lineWidth = 5;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();
*/


// Draw Circles
/*
context.beginPath();
context.arc(250, 250, 250, 0, 2 * Math.PI);
context.stroke();
*/


// Draw Text
context.font = "20px MV Boli";
context.fillStyle = "black";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);


