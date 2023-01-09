/*https://teachablemachine.withgoogle.com/models/0Tj44v366/*/
Webcam.set({
    width:350, height:300, 
    image_format:"png",
    png_quality:90

});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(datauri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+datauri+"' >";
    })
}
 console.log("ml5 version",ml5.version);

 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0Tj44v366/model.json", modelloded);
   function modelloded(){  
 console.log("model has been loaded");
 }
 prediction1="";
 prediction2="";
 function speak(){
    var synth=window.speechSynthesis;
    speakdata1="the first prediction is "+prediction1;
    speakdata2="the second prediction is"+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
    
 }