var rect = require('./rectangle');

function solveRect(l,b) {
  console.log("Solving for rectangle with l= " + l + " and b= " + b);

  if (l <=0 || b<= 0){
    console.log("Rectangle dimentions should be greater then 0");
  } else {
    console.log("The area of the rectagle is " + rect.area(l,b));
    console.log("The perameter of the rectangle is " + rect.perimeter(l,b));

  }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
