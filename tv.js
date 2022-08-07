img = "";
status = "";
objects = [];

function preload(){
      img = loadImage("TV.jpg")
}
function draw(){
      image(img, 0, 0, 700, 500);
      if(status != ""){
            for(i = 0; 1 < objects.length; i++){
                  document.getElementById("status").innerHTML = " Status : Detecting Objects";

                  fill("#FF0000");
                  percent = floor(objects[i].confidence * 100);
                  text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
                  noFill();
                  stroke("#FF0000");
                  rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
      }
}
function setup(){
      canvas = createCanvas(700, 500);
      canvas.center();

      objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded(){
      console.log("Model Loaded!!");
      status = true;
      objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
      if(error){
            console.log(error);
      }
      console.log(results);
      objects = results;
}