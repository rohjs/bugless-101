var heading = document.querySelector("h1")
var audio = new Audio("./assets/audios/pop.wav")

heading.addEventListener("click", function(event) {
  audio.play()
  if (this.active) {
    this.style.color = "#000"
  } else {
    this.style.color = "#fff"
  }
  this.active = !this.active
})

heading.active = true
