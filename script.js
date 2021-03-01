// select element
function getElement(selection) {
  const element = document.getElementById(selection)
  if (element) return element
  throw new Error(`No such ${element} exists. Please check!`)
}
const toggleSwitch = getElement("toggleCheckbox")
const nav = getElement('nav')
const toggleIcon = getElement('toggle-icon')
const image1 = getElement('image1')
const image2 = getElement('image2')
const image3 = getElement('image3')
const textbox = getElement('text-box')

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark ? 'rgba(0 0 0 / 50%)' : 'rgba(255 255 255 / 50%)';
  textbox.style.backgroundColor = isDark ? 'rgba(255 255 255 / 50%)' : 'rgba(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark ? imageMode('dark') : imageMode('light')

}

// Dark or Light image
function imageMode(color) {
  image1.src = `./img/undraw_proud_coder_${color}.svg`
  image2.src = `./img/undraw_feeling_proud_${color}.svg`
  image3.src = `./img/undraw_conceptual_idea_${color}.svg`
}

// Switch theme dynamically
function switchTheme(event) {
  const checked = event.target.checked
  checked ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
  checked ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
  checked ? toggleDarkLightMode(true) : toggleDarkLightMode(false)

}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme)

// check local storage for theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
    toggleDarkLightMode(true)
  }
}