let button = document.getElementById("button");
let container = document.getElementById("container");


//createCubes, not createCubes()
button.addEventListener("click",createCubes);


function createCubes(){
  //this line has to be in the function
  let number = document.getElementById("number").value;

  for(let i = 0; i<number; i++){
    let cube = document.createElement("div");
    cube.className = "cube rotate-center";
    container.appendChild(cube);
  }
}
