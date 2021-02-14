class Striker
{
    constructor(x,y)
    {
        var options=
        {
            FrictionAir:0.15,
            mass:7,
            restitution:1,
            isStatic:false
        }
        this.striker=Matter.Bodies.circle(x,y,20,options)
        this.radius=20;
        World.add(myWorld,this.striker)
        
    }

    display()
    {
        fill("white")
        ellipseMode(RADIUS)
        strokeWeight(5)
        stroke("Red")
        ellipse(this.striker.position.x,this.striker.position.y,this.radius,this.radius)
    }
}