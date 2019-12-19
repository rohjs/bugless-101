var musicPlayItems = document.querySelectorAll(".music-play-item")

musicPlayItems.forEach(function(item) {
  item.isPlaying = false
  item.audio = item.querySelector("audio")

  item.addEventListener("click", function() {
    if (this.isPlaying) {
      item.audio.pause()
      item.audio.currentTime = 0
    } else {
      item.audio.play()
    }

    item.isPlaying = !item.isPlaying
  })
})
