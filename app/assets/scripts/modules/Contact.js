class Contact {
  constructor() {
    this.form = document.querySelector("#contact__form")
    this.name = document.querySelector("#name")
    this.email = document.querySelector("#email")
    this.message = document.querySelector("#message")
    this.send = document.querySelector("#send")
    this.events()
  }

  events() {
    this.form.addEventListener("submit", e => e.preventDefault())
  }
}

export default Contact
