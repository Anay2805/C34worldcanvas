var points = [];
var pointPosition; 
var pointVar, database;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    
    pointPosition = database.ref('point/Position');
    pointPosition.on("value", readPosition, showError);
}

function draw(){

}

function mouseDragged(){
    stroke('purple'); // Change the color
    strokeWeight(20); // Make the points 20 pixels in size
    pointVar = point(mouseX, mouseY);
    points.push(point);
    writePosition();

}

function writePosition(){
    database.ref('point/Position').set({
     'x' : mouseX,
     'y' : mouseY
    });
}
function readPosition(data){
    Position = data.val();
    pointVar.x = Position.x;
    pointVar.y = Position.y;
  }


function showError(){
    console.log("ERROR");
}