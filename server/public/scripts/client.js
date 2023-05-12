$(document).ready(handleReady);


let counter = 0


function handleReady() {
  console.log("jquery is loaded!");
  $("#input").on("submit", post2Server);
  $("#restartBtn").on("click", restartGame);
} //end of handleReady

function post2Server(event) {
  console.log('we out here')
  event.preventDefault()
  let playerOne = $('#playerOne').val()
  let playerTwo = $('#playerTwo').val()
  $.ajax({
    method: 'POST',
    url: '/input',
    data: {
      p1: playerOne,
      p2: playerTwo,
          }
    }).then(function(response){
      getFromServer()
    }).catch(function(error){
      alert('WHOOPS!')
      console.log('Request failed', error)
    })

  }


function getFromServer(){
  $.ajax({
    method: 'GET',
    url: '/input',
    // Promise chaining!
    // after the AJAX request completes, THEN run this function
    // that has access to the response from the server
  })
    .then(function(response) {

      console.log("Success!", response);
      renderToDom(response);
      // If the request fails, run this function
      // that has access to the error from the server
    })
    .catch(function(error) {
      alert("Request failed! :(");
      console.log("Request failed: ", error);
    });
}

function restartGame() {} //end of restartGame

///restart game function needed
//post2Server function needed

//player 1 = Number(player1)

function renderToDom(gotData){
  counter++
  $('#playerOneList').append(`<li class="p1-item">${gotData[gotData.length-1].p1}</li>`)
  $('#playerTwoList').append(`<li class="p2-item">${gotData[gotData.length-1].p2}</li>`)
  $('#counterNumber').text(counter)

  

  //parsing data and finding appropriate appending locations.
}