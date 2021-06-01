function preload(){
devil_horn=loadImage('devil horns.png');
}

devilX=0;
devilY=0;

function setup(){
canvas=createCanvas(400,500);
canvas.center();
video=createCapture(VIDEO);
video.size(400,500);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('poseNet is intialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("devilX="+results[0].pose.rightEye.x);
        console.log("devilY="+results[0].pose.rightEye.y);
        devilX=results[0].pose.rightEye.x;
        devilY=results[0].pose.rightEye.y;
    }
}




function draw(){

 image(video,0,0,400,500);
 filter(GRAY);
 image(devil_horn,devilX-50,devilY-150,180,100);

 }

    function take_snapshot(){
        save('myImage.png');
       
    }