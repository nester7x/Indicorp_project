/*menu-burger*/

const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu__link')

menuBtn.onclick = function() {
  menuBtn.classList.toggle('active')
  menu.classList.toggle('active')
}

menuLink.forEach(function(item) {
  item.onclick = function() {
    menuBtn.classList.remove('active')
    menu.classList.remove('active')
  }
})

/*custom search*/

const search = document.querySelector('.search')
const headerInput = document.querySelector('.header__input')
const inputClose = document.querySelector('.header__input_close')

search.onclick = function() {
  search.classList.add('rotate')
  headerInput.classList.add('show')
  inputClose.classList.add('show')
}

inputClose.onclick = function() {
  search.classList.remove('rotate')
  headerInput.classList.remove('show')
  inputClose.classList.remove('show')
  headerInput.value = ''
}

/*clean inputs*/

const cleanInput = document.querySelector('.input_clean')
const input = document.querySelector('.input')

cleanInput.onclick = function() {
  input.value = ''
}
