class Ball{

    constructor(){
    this.bodies=Bodies.circle(260,50,20,{restitution:0.8});
    World.add(world,this.bodies);

    }
    display()
    {
        var pos=this.bodies.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20);
    }
}

    
