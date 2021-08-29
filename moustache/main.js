noseX=0;
noseY=0;
function preload() {
    moustanche_nose = loadImage('https://i.postimg.cc/h42XF5RM/mustache-icon-vector-moustache-vintage-260nw-1182322300.jpg') ;
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    // circle(noseX, noseY, 20);
    image(moustanche_nose, noseX, noseY, 30, 30)
}

function take_snapshot(){
    save('U_HAVE_A_MUASTACHE.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-5;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
