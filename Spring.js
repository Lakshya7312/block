class Spring {
   constructor(bodyA, pointB) {
       var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.03,
          length: 30
       }
      this.spring = Constraint.create(options);
      this.pointB = pointB;
      World.add(world, this.spring);
    }
   fly() {
       this.spring.bodyA = null;
   }

   attach(body){
     this.spring.bodyA = body;
   }
   
   display() {
      if(this.spring.bodyA) {
       var pointA = this.spring.bodyA.position;
       var pointB = this.pointB;
       stroke("orange");
       strokeWeight(5);
       line(ball.body.position.x, ball.body.position.y, pointB.x, pointB.y);
      }
   }
};