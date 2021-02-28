// select element
function getElement(selection) {
  const element = document.getElementById(selection)
  if (element) return element
  throw new Error(`No such ${element} exists. Please check!`)
}
// dark mode
function darkMode() {
  nav.style.backgroundColor = 'rgba(0 0 0 / 50%)'
  textbox.style.backgroundColor = 'rgba(255 255 255 / 50%)'
  toggleIcon.children[0].textContent = 'Dark Mode'
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
  imageMode('dark')
}
// light mode
function lightMode() {
  nav.style.backgroundColor = 'rgba(255 255 255 / 50%)'
  textbox.style.backgroundColor = 'rgba(0 0 0 / 50%)'
  toggleIcon.children[0].textContent = 'Light Mode'
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
  
  imageMode('light')
}
// Dark or Light image
function imageMode(color) {
  image1.src = `./img/undraw_proud_coder_${color}.svg`
  image2.src = `./img/undraw_feeling_proud_${color}.svg`
  image3.src = `./img/undraw_conceptual_idea_${color}.svg`
}

const toggleSwitch = document.querySelector("input[type='checkbox']")
const nav = getElement('nav')
const toggleIcon = getElement('toggle-icon')
const image1 = getElement('image1')
const image2 = getElement('image2')
const image3 = getElement('image3')
const textbox = getElement('text-box')
// Switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    darkMode()
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
    lightMode()
  }
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme)
// check local storage for theme
const currentTheme = localStorage.getItem('theme')
if(currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
  if(currentTheme === 'dark') {
    toggleSwitch.checked = true
    darkMode()
  } 
}