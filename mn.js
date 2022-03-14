function preLoad(){

}

function setup(){
    canvas = createCanvas(321, 321);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(301, 301);
    video.hide();
    poseNet = ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet: Nice");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("x of nose = " + results[0].pose.nose.x);
        console.log("y of nose = " + results[0].pose.nose.y);
    }
}

function draw(){
image(video, 0, 0, 321, 321);
}

function takeSnapshot(){
    save('Filterly_img.png');
}
