var noseX = 0;
var noseY = 0;
var d = 0;
var rightWristX = 0;
var rightWristY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("poseNet Is Initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x; // 'x' em minúscula
        noseY = results[0].pose.nose.y; // 'y' em minúscula

        leftWristX = results[0].pose.leftWrist.x; // 'x' em minúscula
        rightWristX = results[0].pose.rightWrist.x; // 'x' em minúscula
        rightWristY = results[0].pose.rightWrist.y;

        d = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background("#969A97");
    document.getElementById("square_side").innerHTML = "Largura e altura serão = " + d + "px";
    fill("#F90093");
    stroke("#F90093");
    square(noseX, noseY, d);
}
