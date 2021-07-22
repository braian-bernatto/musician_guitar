class Contact {
  constructor() {
    this.items = document.querySelectorAll(".work__item")
    this.message = document.querySelector(".contact__form__input__message")
    this.name = document.querySelector(".contact__form__input__name")
    this.events()
  }

  events() {
    this.items.forEach(item => {
      let text = item.querySelector(".work__item__title").innerHTML
      item.querySelector(".work__item__button").addEventListener("click", () => this.InsertText(text))
    })
  }

  InsertText(text) {
    this.message.innerHTML = `Hi Diego, I need help with ${text} stuff, can you help me?`
    setTimeout(() => {
      this.name.focus()
    }, 300)
  }
}

export default Contact
