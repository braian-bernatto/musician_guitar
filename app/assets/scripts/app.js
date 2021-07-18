import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import Footer from "./modules/Footer"

let mobileMenu = new MobileMenu()
let footer = new Footer()

if (module.hot) {
  module.hot.accept()
}
