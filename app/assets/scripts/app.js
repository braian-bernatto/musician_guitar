import "../styles/styles.css"
import "lazysizes"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import Footer from "./modules/Footer"
import Contact from "./modules/Contact"

let mobileMenu = new MobileMenu()
let revealOnScroll = new RevealOnScroll()
let footer = new Footer()
let contact = new Contact()

if (module.hot) {
  module.hot.accept()
}
