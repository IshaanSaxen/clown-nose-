noseY = 0; 
noseX = 0;


function preload()
{
    clownnose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialize')
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clownnose, noseX, noseY, 30, 30);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20);
}

function take_snapshot()
{
    save("filterbyishaansaxena.png");
}

function gotPoses(results)
{
    if(results.length < 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + result[0].pose.nose.y);
    }
}

