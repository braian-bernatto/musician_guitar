import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import Footer from "./modules/Footer"
import Contact from "./modules/Contact"

let mobileMenu = new MobileMenu()
let footer = new Footer()
let contact = new Contact()

if (module.hot) {
  module.hot.accept()
}
