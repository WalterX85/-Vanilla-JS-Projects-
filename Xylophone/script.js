


window.addEventListener('keydown', (e) => {
  // console.log(e.key);
  const notes = document.querySelector(`audio[data-key="${e.key}"]`)
  // console.log(notes);
  const animDo = document.querySelector(".do");



  if (!notes) return
  
  
  animDo.classList.add("touch")
  setTimeout(() => {
    animDo.classList.remove("touch")}, 300
  )

  
  notes.currentTime = 0;
  notes.play()
  
})

