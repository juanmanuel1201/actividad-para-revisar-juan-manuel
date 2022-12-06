//variables
var trex, trex_running;
var graw, grawimg,invisiblegraw;
var score;
var obstacle,o1,o2,o3,o4,o5,o6;

function setup(){
//canvas
createCanvas(600,200);

//creacion de sprits
invisiblegraw = createSprite(100,200,200,10);
trex = createSprite(50,150,50,70);
graw = createSprite (300,190,600,10);

//piso invisible
invisiblegraw.visible=false;

//suelo
graw.addImage("graw",grawimg);
graw.x=graw.width/2;

//trexs
trex.scale=0.5
trex.addAnimation("running",trex_running);

//generar numeros aleatorios
//var rand =Math.round(random(1,100))
//console.log(rand)


} 
function preload(){ 

//imagenes
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
grawimg=loadImage("ground2.png");
cloudImage=loadImage("cloud.png");
o1=loadImage("obstacle1.png");
o2=loadImage("obstacle2.png");
o3=loadImage("obstacle3.png");
o4=loadImage("obstacle4.png");
o5=loadImage("obstacle5.png");
o6=loadImage("obstacle6.png");
}

function draw(){

//colos canvas
background(10000);

//console.log(trex.y)

//trex pega al suelo
trex.collide(invisiblegraw);

//velocidad
graw.velocityX=-3

//condicionales
if(keyDown("space")){
trex.velocityY=-10
}
if(graw.x<0){
graw.x=graw.width/2
}

//gravedad
trex.velocityY=trex.velocityY+0.8;

//aparecer las nubes
spawnClouds();


drawSprites();

}
//funcion aparecer nubes
function spawnClouds(){
    if(frameCount % 60 === 0){
    cloud=createSprite(600,100,40,10);
    cloud.y=Math.round(random(280,320));
    cloud.addImage(CloudImage)
    cloud.scale=0.4;
    cloud.velocityX=-3;
    cloud.lifetime=220;
    }
    }
    function spawnObstacles(){
     if(frameCount % 60 === 0){
     obstacle=createSprite(610,165,10,40);
     obstacle.velocityX=-6;
     var rand=Math.round(random(1,6));
     switch(rand){
        case 1: obstacle.addImage(o1);
        break;

        case 2: obstacle.addImage(o2);
        break;

        case 3: obstacle.addImage(o3);
        break;

        case 4: obstacle.addImage(o4);
        break;

        case 5: obstacle.addImage(o5);
        break;

        case 6: obstacle.addImage(o6);
        break;
        default: break;
     }
     }
    }