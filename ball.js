class ball{
    constructor(x,y,width,height,angle){
        var options={
            density:1,
            friction:1
        }
        this.angle=angle;
        this.x=x
        this.y=y
        this.height=height
        this.width=width
        this.body=Bodies.rectangle(this.x,this.y,width,height,options)
        World.add (world,this.body)
    }
    display(){
        var angle=this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        ellipse(0,0,this.width,this.height)
        pop();

    }
}