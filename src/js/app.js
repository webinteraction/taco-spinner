// Add async button
setTimeout(() => {
  document.getElementById('async-btn').innerHTML = `
    <button id="pizza-btn" class="warning spin-btn">
      <span class="spinner">🍕</span>
    </button>
  `
}, 3000)

// Global click listener
document.addEventListener('click', e => {
  // Not a spin button
  if (!e.target.matches('.spin-btn, .spin-btn *')) return

  // Prevent default click
  e.preventDefault()

  // Get the button
  const btn = e.target.closest('.spin-btn')

  // Spin that taco
  btn.classList.toggle('spin')
})

// Global keydown listener
document.addEventListener('keydown', e => {
  // Not focused on spin button
  if (!e.target.matches('.spin-btn')) return

  // Key: t
  if (e.key === 't') {
    // Prevent default keydown
    e.preventDefault()

    // Get the button
    const btn = e.target

    // Spin that taco
    btn.click()
  }
})
