$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#input').on('submit', post2Server);
  $('#restartBtn').on('click', restartGame);
}

///restart game function needed
//post2Server function needed