// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// first hide the error class (.hidden)
//add addEventListener to the heart, and with a click, call the mimicServerCall function
// .then 
// .catch 
// then show the .hidden stuff, show the server errro message
// hide the error message after 3 seconds by using setTimeout
// if successful, change the heart from blank to full (add .activated-heart)
//if a user clicks on the heart again, remove the activated-heart class
const hearts = document.querySelectorAll(".like-glyph")
  // heart.textContent = FULL_HEART
  function heartCallback(e){
    const heartAction = e.target
    mimicServerCall('bogusUrl')
    .then(() => {
      if(heartAction.innerText === EMPTY_HEART){
        heartAction.innerText = FULL_HEART
        heartAction.className = 'activated-heart'
      } else{
        heartAction.innerText = EMPTY_HEART
        heartAction.className = ''
      }
    })
    .catch((error) => {
      const modal = document.getElementById('modal')
      modal.className = ''
      modal.innerText = error
      setTimeout(()=> {
        modal.className = 'hidden', 3000
      })
    })
  }
for (const heart of hearts){
  heart.addEventListener('click', heartCallback)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
