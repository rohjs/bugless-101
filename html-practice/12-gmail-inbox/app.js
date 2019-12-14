var inboxCheckboxes = document.querySelectorAll(".inbox-checkbox")
var inboxStars = document.querySelectorAll(".inbox-star")

inboxCheckboxes.forEach(function(item) {
  item.addEventListener("click", toggle)
  item.active = false
})

inboxStars.forEach(function(item) {
  item.addEventListener("click", toggle)
  item.active = false
})

function toggle() {
  if (this.active) {
    this.classList.remove("active")
  } else {
    this.classList.add("active")
  }

  this.active = !this.active
}
