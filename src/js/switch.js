export class Switch {
  // Create new switch instance
  constructor (options) {
    // Configure component
    this.config = Object.assign({
      attr: 'data-switch',
      onSwitch: (btn, isSwitched) => {},
    }, options)

    // Initialize component
    this.init()

    return this
  }

  // Initialize component
  init () {
    // Global click listener
    document.addEventListener('click', e => this.switch(e))

    // Global keydown listener
    document.addEventListener('keydown', e => this.key(e))
  }

  /**
   * Flip the switch
   * @param {MouseEvent} e - Click event
   * @return {void}
   */
  switch (e) {
    // Not a spin button
    if (!e.target.matches(`[${this.config.attr}], [${this.config.attr}] *`)) return

    // Prevent default click
    e.preventDefault()

    // Get the button
    const btn = e.target.closest(`[${this.config.attr}]`)

    // Get switch lcass
    const switchClass = btn.getAttribute(this.config.attr)

    // Switch that button
    btn.classList.toggle(switchClass)

    // Fire onSwitch event
    this.config.onSwitch(btn, btn.classList.contains(switchClass))
  }

  /**
   * Keyboard listener
   * @param {KeyboardEvent} e - Keydown event
   * @return {void}
   */
  key (e) {
    // Not focused on spin button
    if (!e.target.matches(`[${this.config.attr}]`)) return

    // Key: t
    if (e.key === 't') {
      // Prevent default keydown
      e.preventDefault()

      // Get the button
      const btn = e.target

      // Switch that button
      btn.click()
    }
  }
}
