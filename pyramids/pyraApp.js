console.log("hey b love did it");

/// like with squares

/// set a variable to the html div class
const triangles = document.querySelector(".pyramid")


// make some stuff under at the above div

function createTriangle (rows) {
  let currentRows = 0; /// start at 0
  while (currentRows < rows) {
    const row = document.createElement("div"); // make a new thing
    row.classList.add("row"); // add the row css element like with squares 
    for (
      let currentTriangles = 0; currentTriangles < currentRows;currentTriangles++) {
      const newDiv = document.createElement("div"); // in the new thing ... div with row .. make a smaller thing 
      newDiv.classList.add("triangle"); // div with triangle - not squares
      row.append(newDiv);
    }
    currentRows += 1;
    triangles.appendChild(row); /// add triangles to the rows
  }
};
// createTriangle(1); /// nothing on page
// createTriangle(2);  // gives just one triangle
createTriangle(3);  // show 3 red triangles

const showMe = document.querySelector(".bigPyra")


function createPyramid (rows) { 
  let currentRows = 0; /// start at 0
  while (currentRows < rows) {   /// prob needed some while loops in my game...
    const row = document.createElement("div"); // make a new thing
    row.classList.add("row"); // add the row css element like with squares 
    for (
      let currentTriangles = 0; currentTriangles < currentRows;currentTriangles++) {
      const newDiv = document.createElement("div"); // in the new thing ... div with row .. make a smaller thing 
      newDiv.classList.add("triangle"); // div with triangle - not squares
      row.append(newDiv);
    }
    currentRows += 1;
    triangles.appendChild(row); /// add triangles to the rows
  }
};

createPyramid(16);




///  ok after doing so me of this in the game thing this makes way more sense than when I first saw it... \// must've been tyops b/c all i could get the first time thru was error can't append child of null... 
/// now I see you have to have the css for the height and width and color - otherwise theres nothing for the JS to put onto the html... 

/// well I'm sure we will learn how to do it without css but before my brain hurts anymore I'm gonna stop and say it works like this... I mostly get it. 



/// still not sure why the second giant pyramid jumped up over the spacer div that should be between them... 



/// tried some different position values in the css... will have to play some more flex froggy I reckon