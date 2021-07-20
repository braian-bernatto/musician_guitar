import { throttle } from "lodash"

class StickyTitle {
  constructor() {
    this.titles = document.querySelectorAll(".title-sticky")
    this.events()
  }

  events() {}
}

export default StickyTitle
