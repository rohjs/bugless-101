var toggleSwitch = document.querySelector(".toggle")
var toggleSwitchInput = document.querySelector(".toggle input")

console.log(toggleSwitch)
console.log(toggleSwitchInput)

toggleSwitch.addEventListener("click", function(event) {
  console.log("hi")
  if (this.active) {
    toggleSwitch.classList.remove("active")
  } else {
    toggleSwitch.classList.add("active")
  }

  this.active = !this.active
  console.log(this.active)
})

toggleSwitchInput.active = false
