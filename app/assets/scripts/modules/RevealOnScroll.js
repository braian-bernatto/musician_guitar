import throttle from "lodash/throttle"
import debounce from "lodash/debounce"

class RevealOnScroll {
  constructor() {
    this.work_section = document.querySelector(".work")
    this.itemsToReveal = document.querySelectorAll(".reveal")
    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)

    this.upButton = document.querySelector(".up")
    this.scrollThrottle2 = throttle(this.checkTop, 200).bind(this)

    this.events()
    this.checkTop()
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle)
    window.addEventListener("scroll", this.scrollThrottle2)
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHeight = window.innerHeight
      }, 333)
    )

    this.work_section.visible = false
  }

  calcCaller() {
    this.itemsToReveal.forEach(el => {
      if (el.isRevealed == false) {
        this.calculateIfScrolledTo(el)
      }
    })
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
      if (scrollPercent < 75) {
        el.classList.add("reveal-item--is-visible")
        el.isRevealed = true
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle)
        }
      }
    }
  }

  checkTop() {
    if (window.scrollY == 0) {
      this.upButton.classList.add("up--down")
      console.log("entro en if visible")
      if (this.work_section.visible == false) {
        this.work_section.classList.add("visible")
      }
    } else {
      this.upButton.classList.remove("up--down")
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => {
      el.classList.add("reveal-item")
      el.isRevealed = false
    })
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
  }
}

export default RevealOnScroll
