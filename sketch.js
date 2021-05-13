const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;



var engine,world;
var drops=[];
var rand;
var maximumDrop=100;
var thunderCreatedFrame=0;
var man,thunder,thunderbolt1,thunderbolt2,thunderbolt3,thunderbolt4,manimg,manwalking,umbrella;

function preload(){
 thunderbolt1=loadImage("thunderbolt/1.png");
 thunderbolt2=loadImage("thunderbolt/2.png");
 thunderbolt3=loadImage("thunderbolt/3.png");
 thunderbolt4=loadImage("thunderbolt/4.png");


}

function setup(){
    createCanvas(400,700)
    engine=Engine.create();
    world=engine.world
    umbrella=new Umbrella(200,500);
    if(frameCount%150===0){

        for(var i=0;i<maximumDrop;i++){
            drops.push(new createDrop(random(0,400),random(0,700)));
        }

    }
   
    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount
        thunder=createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1:thunder.addImage(thunderbolt1)
            break;
            case 2:thunder.addImage(thunderbolt2)
            break;
            case 3:thunder.addImage(thunderbolt3)
            break;
            case 4:thunder.addImage(thunderbolt4)
            break;

            default:break;
            
            
        }
        thunder.scale=random(0.3,0.6)
    }
    if(thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }
   
    umbrella.display();
    for(var i=0;i<maximumDrop;i++){
        drops[i].showDrop()
        drops[i].updateY();
    }
    drawSprites();
    
}   

