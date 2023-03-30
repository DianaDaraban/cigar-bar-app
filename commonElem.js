const body = document.querySelector('body')
const greeting = document.querySelector('h1')
const intro = document.getElementById('intro')
const gift = document.querySelector('.gift')
const giftText = document.querySelector('.gift-text')
const number = document.querySelector('.number')
const container = document.querySelector('.container')
const popUp = document.querySelector('.pop-up')
const closeBtn = document.querySelectorAll('.close-btn')
const closeBtnSign = document.querySelectorAll('.close-btn-sign')
const popUpBackground = document.querySelector('.popUp-background')
const submitBtn = document.querySelector('.submit-btn')
const inputData = document.querySelector('.input-data')
const searchLabel = document.querySelector('.search-label')
const searchInput = document.querySelector('.search-input')
const searchBtn = document.querySelector('.fa-sharp')
const searchExtended = document.querySelector('.search-extended')
const navbarBtn = document.querySelector('.navbar-btn')
const navbarList = document.querySelector('.navbar-list')
const navbarListBtn = document.querySelector('.navbar-list-btn')
const shoppingCartIcon = document.querySelector('.shopping-cart-icon')
const shoppingBackground = document.querySelector('.shopping-background')
const shoppingCart = document.querySelector('.shopping-cart')
const signInIcon = document.querySelector('.sign-in-icon')
const signInBackground = document.querySelector('.sign-in-background')
const signInPop = document.querySelector('.sign-in-pop')
const logo = document.getElementById('logo')
const socialIcons = document.querySelector('.social-icons')
const mainContainer = document.querySelector('.container')
const navbar = document.querySelector('.navbar')
const shoppingCounter = document.querySelector('.shopping-counter')
const infoContainer = document.querySelector('.info-container')

logo.addEventListener('click', () => {
  location.href = 'index.html'
})

gift.addEventListener('click', () => {
  // HIDING THE GIFT ELEMENT
  // HIDING THE GIFT ELEMENT
  gift.style.transform = 'translate(0, 15em)'
  giftText.style.transform = 'translate(0, 15em)'
  gift.style.transition = 'all 1s'
  giftText.style.transition = 'all 1s'
  number.style.visibility = 'hidden'

  //   POP-UP BACKGROUND
  //   POP-UP BACKGROUND

  popUpBackground.classList.remove('hidden')

  // MAKE VISIBLE THE POP-UP WINDOW
  // MAKE VISIBLE THE POP-UP WINDOW

  popUp.classList.remove('hidden')
  popUp.style.transform = 'translateY(0)'
  popUp.style.transition = 'all 1s'
})

closeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    // POP-UP DISAPPEARING
    // POP-UP DISAPPEARING
    popUp.style.transform = 'translateY(150%)'
    popUp.style.transition = 'all 1s'
    popUp.classList.add('hidden')
    popUpBackground.classList.add('hidden')

    // GIFT REAPPEARING
    gift.style.transform = 'translate(0)'
    gift.style.transition = 'all 1s'
    number.style.visibility = 'visible'
    giftText.style.transform = 'translate(0)'

    // SHOPPING-CART

    infoContainer.classList.toggle('hidden')
  })
})

popUpBackground.addEventListener('click', () => {
  // POP-UP DISAPPEARING
  // POP-UP DISAPPEARING
  popUp.style.transform = 'translateY(150%)'
  popUp.style.transition = 'all 1s'
  popUp.classList.add('hidden')
  popUpBackground.classList.add('hidden')

  // GIFT REAPPEARING
  gift.style.transform = 'translate(0)'
  gift.style.transition = 'all 1s'
  number.style.visibility = 'visible'
  giftText.style.transform = 'translate(0)'
})

submitBtn.addEventListener('click', () => {
  // POP-UP DISAPPEARING
  // POP-UP DISAPPEARING

  if (inputData.value) {
    popUp.style.transform = 'translateY(150%)'
    popUp.style.transition = 'all 1s'
    popUp.classList.add('hidden')
    popUpBackground.classList.add('hidden')

    // GIFT REAPPEARING
    gift.style.transform = 'translate(0)'
    gift.style.transition = 'all 1s'
    number.style.visibility = 'visible'
    giftText.style.transform = 'translate(0)'

    //   SUBMIT INPUT TO LOCAL STORAGE
    //   SUBMIT INPUT TO LOCAL STORAGE

    localStorage.setItem('email', inputData.value)
    inputData.value = ''
  }
})

// SEARCH BOX ON NAV BAR SETTINGS
// SEARCH BOX ON NAV BAR SETTINGS

searchBtn.addEventListener('click', () => {
  searchLabel.classList.toggle('search-extended')
  searchInput.value = ''
})

// SHOPPING BOX CART SETTINGS
// SHOPPING BOX CART SETTINGS
// SHOPPING BOX CART SETTINGS

shoppingCartIcon.addEventListener('click', () => {
  //   POP-UP BACKGROUND
  //   POP-UP BACKGROUND

  shoppingBackground.classList.remove('hidden')

  // MAKE VISIBLE THE POP-UP WINDOW
  // MAKE VISIBLE THE POP-UP WINDOW

  shoppingCart.classList.remove('hidden')
  shoppingCart.style.transform = 'translateY(0)'
  shoppingCart.style.transition = 'all 1s'
})

closeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    // POP-UP DISAPPEARING
    // POP-UP DISAPPEARING
    shoppingCart.style.transform = 'translateY(150%)'
    shoppingCart.style.transition = 'all 1s'
    shoppingCart.classList.add('hidden')
    shoppingBackground.classList.add('hidden')
  })
})

shoppingBackground.addEventListener('click', () => {
  // POP-UP DISAPPEARING
  // POP-UP DISAPPEARING
  shoppingCart.style.transform = 'translateY(150%)'
  shoppingCart.style.transition = 'all 1s'
  shoppingCart.classList.add('hidden')
  shoppingBackground.classList.add('hidden')
})

// SIGN-IN AND SIGN-OUT SETTINGS
// SIGN-IN AND SIGN-OUT SETTINGS
// SIGN-IN AND SIGN-OUT SETTINGS

signInIcon.addEventListener('click', () => {
  //   SIGN-IN BACKGROUND
  //   SIGN-IN BACKGROUND

  signInBackground.classList.remove('hidden')

  // MAKE VISIBLE THE POP-UP WINDOW
  // MAKE VISIBLE THE POP-UP WINDOW

  signInPop.classList.remove('hidden')
  signInPop.style.transform = 'translateY(0)'
  signInPop.style.transition = 'all 1s'
})

closeBtnSign.forEach((btn) => {
  btn.addEventListener('click', () => {
    // POP-UP DISAPPEARING
    // POP-UP DISAPPEARING
    signInPop.style.transform = 'translateY(150%)'
    signInPop.style.transition = 'all 1s'
    signInPop.classList.add('hidden')
    signInBackground.classList.add('hidden')
  })
})

signInBackground.addEventListener('click', () => {
  // POP-UP DISAPPEARING
  // POP-UP DISAPPEARING
  signInPop.style.transform = 'translateY(150%)'
  signInPop.style.transition = 'all 1s'
  signInPop.classList.add('hidden')
  signInBackground.classList.add('hidden')
})

// HIDE ON SCROLL DOWN
// HIDE ON SCROLL DOWN

const hideOnScroll = () => {
  let scrollHeight = document.body.clientHeight
  let scrollHeightNumber = scrollHeight - 1200
  let scrollActualHeight = parseInt(window.pageYOffset)

  if (scrollActualHeight > scrollHeightNumber) {
    socialIcons.classList.add('hidden')
    gift.classList.add('hidden')
  } else if (scrollActualHeight < scrollHeightNumber) {
    socialIcons.classList.remove('hidden')
    gift.classList.remove('hidden')
  }
}

window.addEventListener('scroll', hideOnScroll)

const stickyNavbar = () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticky-navbar')
  } else if (window.pageYOffset == 0) {
    navbar.classList.remove('sticky-navbar')
  }
}

window.addEventListener('scroll', stickyNavbar)
