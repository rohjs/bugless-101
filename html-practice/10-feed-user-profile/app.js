var followButton = document.querySelector(".feed-user-profile button")

followButton.addEventListener("click", function() {
  if (this.following) {
    this.innerHTML = "Follow"
    this.classList.remove("following")
  } else {
    this.innerHTML = "Following"
    this.classList.add("following")
  }
  this.following = !this.following
})

followButton.following = false
