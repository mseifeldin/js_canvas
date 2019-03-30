function init()
  {  
    var canvas = document.getElementById('blob');
    if(canvas.getContext == null)
    {
      alert("You need Firefox version 1.5 or higher for this to work, sorry."); 
      return; 
    }

    document.onkeydown = function(event) 
    {
      var keyCode; 
      
      if(event == null)
      {
        keyCode = window.event.keyCode; 
      }
      else 
      {
        keyCode = event.keyCode; 
      }

      switch(keyCode)
      {
        // left 
        case 37: 
          blobColl.addForce(new Vector(-50.0, 0.0)); 
          break; 
         
        // up 
        case 38: 
          blobColl.addForce(new Vector(0.0, -50.0)); 
          break; 
          
        // right 
        case 39: 
          blobColl.addForce(new Vector(50.0, 0.0)); 
          break; 
        
        // down
        case 40: 
          blobColl.addForce(new Vector(0.0, 50.0)); 
          break; 
          
        // join 'j' 
        case 74:
          blobColl.join(); 
          break;  
        
        // split 'h'
        case 72: 
          blobColl.split(); 
          break; 
          
        // toggle gravity 'g'
        case 71: 
          toggleGravity(); 
          break; 

        default: 
          break; 
      } 
    }