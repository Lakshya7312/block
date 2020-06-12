class Block {
   constructor(x, y, width, height){
       var options = {
          'density': 1.4,
          'friction': 1.0
       }
     this.body = Bodies.rectangle(x, y, 18, 31, options);
     this.width = 18;
     this.height = 30;
     World.add(world, this.body);
     this.Visibility = 255;
   }

   display() {
      if(this.body.speed < 3){
       var pos = this.body.position;
       noStroke();
       rectMode(CENTER);
       rect(pos.x, pos.y, 18, 30);
      }
      else{
         World.remove(world, this.body);
         push();
         this.Visibility = this.Visibility-7;
         tint(255, this.Visibility);
         pop();
      }
   }

   score(){
      if(this.Visibility < 0 && this.Visibility > -40){
         score++;
      }
   }

   /*gameEnd(){
      this.body.Visibility === false;
   }*/
};