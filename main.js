song="";
leftWristX="";
rightWristX="";
scoreLeftWrist="";
scoreRightWrist="";

function preload(){
    song = loadSound(music.mp3);
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modeLoaded);
    poseNet.on("pose",gotPoses);
}
function modeLoaded(){
    console.log("Posenet model is initialized");
}

function draw(){
    image(video,0,0,600,500);

    fill("#FF0000")
    stroke("#FF0000")
}

function play(){
    song.play();
    song.setVolume(0.5);
    song.setRate(1);
}

function preload(){
    song=loadSound("music.mp3");  
}

function gotPoses(result){
 if(result.length>0)
 {
    leftWristX=result[0].pose.leftWrist.x;
    leftWristY=result[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

    rightWristX=result[0].pose.rightWrist.x;
    rightWristY=result[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
 }
}

