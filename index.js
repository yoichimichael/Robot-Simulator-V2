document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!

  document.addEventListener("keydown", function(e) {
    e.preventDefault()
    let movesList = document.getElementById("moves-container");
    let move = document.createElement("li");

    if (e.key === "ArrowLeft") {
      move.textContent = "Left"
      movesList.appendChild(move);      
    } else if (e.key === "ArrowRight") {
      move.textContent = "Right"
      movesList.appendChild(move);
    } else if (e.key === "ArrowUp") {
      move.textContent = "Up"
      movesList.appendChild(move);
    } else if (e.key === "ArrowDown") {
      move.textContent = "Down"
      movesList.appendChild(move);
    };

  });

})
