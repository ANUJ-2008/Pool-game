const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var striker;
function preload()
{
    table=loadImage("Pool Table.jpg")
    arrow=loadImage("Arrow.jpg")
}

function setup()
{
    createCanvas(1200,450)
    myEngine=Engine.create()
    myWorld=myEngine.world
    myEngine.world.gravity.y=0;

    striker=new Striker(300,210)

    ball1=new Ball(942,135,"purple",1)
    ball2=new Ball(942,185,"green",2)
    ball3=new Ball(942,235,"yellow",3)
    ball4=new Ball(942,285,"red",4)
    ball5=new Ball(898,160,"cyan",5)
    ball6=new Ball(898,210,"darkblue",6)
    ball7=new Ball(898,260,"black",7)
    ball8=new Ball(854,180,"darkgreen",8)
    ball9=new Ball(854,235,"indigo",9)
    ball10=new Ball(810,210,"lightpink",10)
}

function  draw()
{
    background(table)

    Engine.update(myEngine)

    striker.display()
    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()
    ball6.display()
    ball7.display()
    ball8.display()
    ball9.display()
    ball10.display()

    fill("black")
    noStroke()
    text(mouseX,100,100)
    text(mouseY,120,120)
}

function mouseDragged()
{
    Matter.Body.setPosition(striker,{x:mouseX,y:mouseY})
}

/*function mouseReleased()
{
    Matter.Body.setVelocity(striker.body,
        {
            x:3,
            y:-3
        })
}
*/