// Iterate all spin buttons
document.querySelectorAll('.spin-btn').forEach(btn => {
  // Button click listener
  btn.addEventListener('click', e => {
    // Prevent default click
    e.preventDefault()

    // Spin that taco
    btn.classList.toggle('spin')
  })

  // Button key listener
  btn.addEventListener('keydown', e => {
    // Key: t
    if (e.key === 't') {
      // Prevent default keydown
      e.preventDefault()

      // Spin that taco
      btn.click()
    }
  })
})
