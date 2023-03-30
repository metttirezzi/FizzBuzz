// object oriented programming 
// this is the basic example of factory function 
function createCircle(radius) {   // using factory functions to produce objects 
return {
    radius,
    draw() {
        console.log('draw');
    }
   };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);