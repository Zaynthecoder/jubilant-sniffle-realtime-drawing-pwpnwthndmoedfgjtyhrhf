NoseX = 0;
NoseY = 0;
difference = 0;
LeftWristX = 0;
RightWristX = 0;



function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width & Height will be "+ difference + "px";
   
    fill('F90093');
    stroke('F90093');
    square(NoseX,NoseY, difference);
    console.log("background color has been set! yay!")

}

function modelLoaded() {
    console.log(" Posenet model thingy has been loaded. yay. ");
}

function gotPoses(results) {
    console.log("poseNet is on yay!")
    if(results.length > 0)  {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("Nose X position is: " + NoseX + "and Nose Y position is: " + NoseY );

        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("Left Wrist X is positioned at - " + LeftWristX + "Right Wrist X position is positioned at - " + RightWristX + " and the Difference between the two to determine the size of the square is - " + difference+"px" );

    }
}
