function setup(){
canvas=createCanvas(300, 300);
canvas.position(550, 250);
webcam=createCapture(VIDEO);
webcam.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
}
function draw(){
image(webcam, 0, 0, 300, 300);
classifier.classify(webcam, getResults)
}
function modelLoaded(){
    console.log("Model loaded successfully");
}
function getResults(error, array){
    if (error){
        console.error(error);
    }
    else {
        console.log(array);
        document.getElementById("object_name").innerHTML=array[0].label;
        document.getElementById("object_accuracy").innerHTML=array[0].confidence.toFixed(3)*100+"%";
    }
}