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
  lab = createP("Input Weight (kg):"+"\n")
  lab.id("label")
  lab.class("start")
  
  
  inp = createInput("","number")
  
  inp.id("Input-text")
  inp.class("start")
  
  btStart = createButton("Proceed")
  btStart.id("button")
  btStart.class("start")
  btStart.mousePressed(almostStartTest)
  reject = createP("")
  resetCounter = 0
  

}
  


function almostStartTest(){
  if(inp.value()!=""){
  weight = int(inp.value())
 
  lab.hide()
  inp.hide()
  btStart.hide()
  reject.hide()
  
  counter = 1
  
  
  

  
  instructions = createP("Press Screen Once To Start Recording Punch and Press Again When Done. Double-click The Screen To Reset Test.")
  instructions.id("instructions")
  status = createP("")
  status.id("status")
  accZTxt = createP("")
  accZTxt.class("important-txt")
  velocityTxt = createP("")
  velocityTxt.class("important-txt")
  newtons = createP("")
  newtons.class("important-txt")
  
  resetCounter += 1
  
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
    
  }
}

function draw() {
  if(counter%2!=0 && counter>2){
    if(resetCounter==2){
      valuesZ = [0]
      resetCounter = 1
      
    }
    instructions.hide()
    status.show()
    status.html("Recording... THROW A PUNCH!")
    velocityTxt.html("")
    newtons.html("")
    accZTxt.show()
    
    valuesZ.push(accelerationZ)
    
    accZTxt.hide()
    
  }
  if(counter%2==0 && counter>=4){
    status.hide()
    accZTxt.show()
    accZTxt.html(floor(max(valuesZ))+ " m/s^2")
    t = (valuesZ.length-deltaTime)/frames
    velocity = floor(max(valuesZ))*t
    velocityTxt.html(floor(velocity)+" m/s")
  
    F = floor(max(valuesZ))*weight
    newtons.html(F+" N")
    if(resetCounter == 1){
      resetCounter = 2
        
     
    }
  }
}
