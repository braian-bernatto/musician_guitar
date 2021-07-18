class Footer {
  constructor() {
    this.text = document.querySelector(".site-footer__text")
    this.year = document.querySelector(".year")
    this.events()
    this.Year()
  }

  events() {}

  Year() {
    this.year.innerHTML = new Date().getFullYear()
  }
}

export default Footer
