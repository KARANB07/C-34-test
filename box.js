class ground{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:1,
            density:1,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.height=h;
        this.width=w;
        this.body=Bodies.rectangle(this.x,this.y,w,h,options)
        World.add(world,this.body);

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        stroke(255,0,0)
        rectMode(CENTER)
        fill(85,85,85)
        rect(0,0,this.width,this.height)
        pop();s
    }
}