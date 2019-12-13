var followButton = document.querySelector(".feed-user-profile button")
var likeButton = document.querySelector(".feed-footer button:first-child")
var commentButton = document.querySelector(".feed-footer button:last-child")
var feedComment = document.querySelector(".feed-comment")

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

likeButton.addEventListener("click", function() {
  if (this.following) {
    this.innerHTML = "10 Likes"
    this.classList.remove("active")
  } else {
    this.innerHTML = "11 Likes"
    this.classList.add("active")
  }
  this.following = !this.following
})
likeButton.following = false

commentButton.addEventListener("click", function() {
  if (this.active) {
    feedComment.classList.remove("active")
  } else {
    feedComment.classList.add("active")
  }
  this.active = !this.active
})
commentButton.active = false
