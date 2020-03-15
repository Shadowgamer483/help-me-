class ch4in3{
constructor(bodyA,bodyB){
    var options={
    bodyA:bodyA,
    bodyB:bodyB,
    length:100, 
    stiffness:100,  
}
this.chain3=Matter.Constraint.create(options);
World.add(world,this.chain3);
}
display(){
    var pointA=this.chain3.bodyA.position;
    var pointB=this.chain3.bodyB.position;
    strokeWeight(60)
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}