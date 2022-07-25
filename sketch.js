let inp;
let lab;
let btStart;
let weight;
let intructions;
let accZTxt;
let accZ;
let valuesZ = [0]
let status;
let t;
let testBt;
let frames = 30;
let counter = 0;
let deltaTime = 8;
let velocityTxt;
let velocity;
let newtons;
let F
let reject;
let resetCounter;
let timer;

function setup() {
  noCanvas()
  frameRate(frames)
  lab = createP("Input Weight in kg (Only works on mobile): ")
  lab.id("label")
  
  inp = createInput("","number")
  inp.id("weight")
  inp.class("Input-text")
  
  btStart = createButton("Go To The Punch-Ometer")
  btStart.class("button")
  btStart.mousePressed(almostStartTest)
  reject = createP("")
  resetCounter = 0
  

}
  


function almostStartTest(){
  if(inp.value()!=""){
  weight = int(inp.value())
  console.log(weight)
  lab.hide()
  inp.hide()
  btStart.hide()
  reject.hide()
  
  counter = 1
  
  
  

  
  status = createP("Press Screen Once To Start Recording Punch and Press Again When Done. Double-click The Screen To Reset Test.")
  status.id("status")
  accZTxt = createP("")
  accZTxt.class("important-txt")
  velocityTxt = createP("")
  velocityTxt.class("important-txt")
  newtons = createP("")
  newtons.class("important-txt")
  
  resetCounter += 1
  console.log("resetcounter = "+resetCounter)
  }
  else{
    lab.html("Didn't Input Weight!")
  }

}

function doubleClicked() {
  //valuesZ = [0]
  //accZTxt.html("")
  //velocityTxt.html("")
  //newtons.html("")
  //status.show()
  //counter = 2
  if(counter >0){
  window.location.reload()
  }
  
}
function mouseClicked() {
  if(counter>0){
    counter += 1
    console.log(counter)
  }
}

function draw() {
  if(counter%2!=0 && counter>2){
    if(resetCounter==2){
      valuesZ = [0]
      resetCounter = 1
      console.log("oh")
    }
    status.hide()
    velocityTxt.html("")
    newtons.html("")
    accZTxt.show()
    
    valuesZ.push(accelerationZ)
    console.log(valuesZ)
    accZTxt.html("Recording... THROW A PUNCH!")
    
  }
  if(counter%2==0 && counter>=4){
    accZTxt.html("Acceleration: "+floor(max(valuesZ))+ " m/s^2")
    t = (valuesZ.length-deltaTime)/frames
    velocity = floor(max(valuesZ))*t
    velocityTxt.html("Speed:"+floor(velocity)+" m/s")
  
    F = floor(max(valuesZ))*weight
    newtons.html("Force: "+F+" N")
    if(resetCounter == 1){
      resetCounter = 2
      console.log("resetcounter = "+resetCounter)   
      console.log(valuesZ)
    }
  }
}