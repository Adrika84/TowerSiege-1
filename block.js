class block {
    constructor(x, y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x, y, 50, 60, options);
      this.width = 50;
      this.height = 60;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("lightpink")
      rect(pos.x, pos.y, this.width, this.height);
    }
  };