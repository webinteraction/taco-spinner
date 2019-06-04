import { Switch } from './switch'

// Add async button
setTimeout(() => {
  document.getElementById('async-btn').innerHTML = `
    <button id="pizza-btn" class="warning spin-btn" data-switch="spin">
      <span class="spinner">🍕</span>
    </button>
  `
}, 3000)

// Switch buttons
const switchBtns = new Switch()

// Jiggle buttons
const jiggleButtons = new Switch({
  attr: 'data-jiggle',
  onSwitch: (btn, isSwitched) => {
    btn.querySelector('.spinner').textContent = isSwitched ? '😬' : '🌯'
  },
})
