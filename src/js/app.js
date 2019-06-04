// Get the taco button
const tacoBtn = document.getElementById('taco-btn')

// Button click listener
tacoBtn.addEventListener('click', e => {
  // Prevent default click
  e.preventDefault()

  // Spin that taco
  tacoBtn.classList.toggle('spin')
})

// Button key listener
tacoBtn.addEventListener('keydown', e => {
  // Key: t
  if (e.key === 't') {
    // Prevent default keydown
    e.preventDefault()

    // Spin that taco
    tacoBtn.click()
  }
})
