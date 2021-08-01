class Contact {
  constructor() {
    this.items = document.querySelectorAll(".work__item")
    this.message = document.querySelector(".contact__form__input__message")
    this.name = document.querySelector(".contact__form__input__name")
    this.events()
  }

  events() {
    this.items.forEach(item => {
      let workItem = item.querySelector(".work__item__title").innerHTML
      item.querySelector(".work__item__button").addEventListener("click", () => this.InsertText(workItem))
    })
  }

  InsertText(workItem) {
    this.message.value = `Hi Diego, I need help with ${workItem} stuff, can you help me?`
    setTimeout(() => {
      this.name.focus()
    }, 1000)
  }
}

export default Contact
