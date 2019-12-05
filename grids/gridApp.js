 console.log("good job skippy");


 const show = document.querySelector(".gameHere");

 function makeRows () {
for (let i = 0; i < 8; i++) {
  const row = document.createElement("div");
  for (let n = 0; n < 8; n++) {
    const cube = document.createElement("div");
    cube.classList.add(n % 2 === 0 ? "light" : "dark", "square");
    row.appendChild(cube);
  }
  show.appendChild(row);
};
 };

 makeRows();


const tell = document.querySelector(".board")

function makeSquares () {
for (let i = 0; i < 8; i++) {
    const board = document.createElement("div"); /// make 8 new "divs"
    board.classList.add("row"); /// add the row css properties to all 8
    for (let n = 0; n < 8; n++) {
      const newDiv = document.createElement("div"); /// make 8 more divs
      if (i % 2 === 0) { // this splits it to odds n evens
        newDiv.classList.add(n % 2 === 0 ? "light" : "dark", "square");
        // for the odds ... add css of red then black alternating , but square to all
      } else {
        newDiv.classList.add(n % 2 === 0 ? "dark" : "light", "triangle");
      } // now for the evens add black then red css color alternating, and square to all
      // wow is real funky if you you use triangle and make em smaller and green
      board.appendChild(newDiv);
    }
    tell.appendChild(board);
  };
};

makeSquares();


const showNTell = document.querySelector(".realThing");

function makeBoard () {
    for (let a = 0; a < 8; a++) {
        const board = document.createElement("div"); /// make 8 new "divs"
        board.classList.add("row"); /// add the row css properties to all 8
        for (let b = 0; b < 8; b++) {
          const newDiv = document.createElement("div"); /// make 8 more divs
          if (a % 2 === 0) { // this splits it to odds n evens
            newDiv.classList.add(b % 2 === 0 ? "light" : "dark", "bbsquare");
            // for the odds ... add css of red then black alternating , but square to all
          } else {
            newDiv.classList.add(b % 2 === 0 ? "dark" : "light", "bbsquare");
          } // now for the evens add black then red css color alternating, and square to all
          // wow is real funky if you you use triangle and make em smaller and green
          board.appendChild(newDiv);
        }
        showNTell.appendChild(board);
      };
    };

makeBoard();
