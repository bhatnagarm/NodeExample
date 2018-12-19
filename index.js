var rect = require('./rectangle');

function solveRect(l,b) {
  console.log("Solving for rectangle with l= " + l + " and b= " + b);
  rect(l,b, (err,rectangle) => {
    if(err) {
      console.log("ERROR " + err.message);
    } else {
      console.log("The Area of the rectangle of dimensions l ="
     + l + " and b = " + b + " is " + rectangle.area(l,b));
     console.log("The perimeter of the rectangle of dimensions l ="
    + l + " and b = " + b + " is " + rectangle.perimeter(l,b));

    }
  });
  console.log("This call is after the call to rectangle call");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
