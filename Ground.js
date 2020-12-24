class Ground
{
   constructor()
   {
    
    //ground objeet
     this.bodies=Bodies.rectangle(200,360,400,40,{isStatic:true});
     World.add(world,this.bodies);
    }

    display()
    {
        var pos=this.bodies.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,400,40);

    }

}