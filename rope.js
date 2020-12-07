
class rope{
    constructor(body1,pointB){
        var options={
            bodyA:body1,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope)
        
    }
    attach(){
        this.rope.bodyA=body1
    }
    fly(){
        this.rope.pointB=null
    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position
            var pointB=this.pointB
            push();
            stroke(255,0,0);
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            pop();
        }

    }
}