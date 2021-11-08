


window.addEventListener('keydown', (e) => {
  // console.log(e.key);
  const notes = document.querySelector(`audio[data-key="${e.key}"]`)
  // console.log(notes);
  const animation = document.querySelector(`[data-key="${e.key}"]`)


  if (!notes) return
  
  
  animation.classList.add("touch")
  setTimeout(() => {
    animation.classList.remove("touch")}, 300
  )

  
  notes.currentTime = 0;
  notes.play()
  
})

