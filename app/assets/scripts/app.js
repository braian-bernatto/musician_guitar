import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import Contact from "./modules/Contact"
import Footer from "./modules/Footer"

let mobileMenu = new MobileMenu()
let contact = new Contact()
let footer = new Footer()

if (module.hot) {
  module.hot.accept()
}
