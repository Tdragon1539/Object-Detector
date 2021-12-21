
status1 = "";
objectDetector1 = "";
objects = [];

function preload(){
   
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector1 = ml5.objectDetector('cocossd', model_loaded);
document.getElementById("status").innerHTML = "Status: Detecting";

}

function model_loaded(){
console.log("Model Loaded!");
status1 = true;

}


function draw(){
    image(video, 0, 0, 380, 380);
    if(status1 != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector1.detect(video, gotResults);
        document.getElementById("objects").innerHTML = objects.length;
        for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML = "Status: Object Detected";
fill(r,g,b);
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y + 10);
noFill();
stroke(r,g,b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
  
   
}

function gotResults(error, results){
if(error){
    console.error(error);
} else{
console.log(results);
objects = results;

}

}

