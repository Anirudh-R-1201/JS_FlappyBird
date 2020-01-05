function Bird(){
    this.y = 200;
    this.x = 75;
    this.velocity=0;
    this.gravity=0.25;
    
    this.show = function() {
      fill(255);
      ellipse(this.x,this.y,20,20);
    }
    
    this.update = function(){
      this.velocity +=this.gravity;
      this.y += this.velocity;
      if(this.y>390){
        this.y=390;
        this.velocity=0;
      }  
      if(this.y<0){
        this.y=0;
        this.velocity=0;
      }
      
    }
    
    this.up = function(){
      this.velocity += -this.gravity*30;
    }
  }   