song1="";
song2="";
function preload(){
    song1=loadSound("harry.mp3");
    song2=loadSound("belive.mp3")
}
function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();

video=createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video,0,0,600,500);

}