var body = document.body
var modal = document.querySelector(".modal")
var closeButton = document.querySelector("button")

closeButton.addEventListener("click", function(event) {
  console.log("triggered")
  modal.classList.add("fade-out")
  window.setTimeout(function() {
    body.removeChild(modal)
  }, 550)
})
