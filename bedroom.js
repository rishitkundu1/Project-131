img = "";
status = "";

function preload(){
      img = loadImage("Bedroom.jpg")
}
function draw(){
      image(img, 0, 0, 700, 500)
}
function setup(){
      canvas = createCanvas(700, 500);
      canvas.center();

      objectDetector = ml5.objectDetector('cocossd', modelLoaded);
      document.getElementById("status").innerHTML = " Status : Detecting Objects";
}
function modelLoaded(){
      console.log("Model Loaded!!");
      status = true;
      objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
      if(error){
            console.log(error);
      }else{
            console.log(results);
      }
}