
// implementation of abstraction in javascript
// private methods and properties
//constructor function 
function Circle(radius) {

    this.radius = radius; 

    let defaultLocation = { x : 0 , y : 0 };  // all the variables in parent fucntion

    let computeOptimumLocation = function(factor) {
        // ... this is it
    }

    this.getDefaultLocation = function() {
        return defaultLocation;

    };
    this.draw = function() {
        computeOptimumLocation(0.1);
        // default location
        // this.radius
        console.log('draw');
    };
    //using define property fr function setters and getters 
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
          },
          set : function(value) {
              if (!value.x || !value.y ). // using falsy 
              throw new Error('Invalid Location');
              defaultLocation : value;

          }
    });
        
}

const circle = new Circle(10); // new operator create an empty object
circle.defaultLocation = 1;
circle.draw();
