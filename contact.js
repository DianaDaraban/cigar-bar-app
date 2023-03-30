const gift = document.querySelector('.gift')
const giftText = document.querySelector('.gift-text')
const number = document.querySelector('.number')
const popUp = document.querySelector('.pop-up')
const closeBtn = document.querySelectorAll('.close-btn')
const popUpBackground = document.querySelector('.popUp-background')
const submitBtn = document.querySelector('.submit-btn')
const searchLabel = document.querySelector('.search-label')
const searchInput = document.querySelector('.search-input')
const searchBtn = document.querySelector('.fa-sharp')
const searchExtended = document.querySelector('.search-extended')
const inputData = document.querySelector('.input-data')
const countryCode = document.querySelector('.country-code')
const countryList = document.querySelector('.countries-list')
const countryListUl = document.querySelector('.country-list')
const inputs = document.querySelectorAll('input')
const errors = document.querySelectorAll('errors')

const countryText = document.querySelector('.countryText')
const searchCountryInput = document.querySelector('.search-country-input')

// ANIMATION EFFECTS
// ANIMATION EFFECTS
// ANIMATION EFFECTS

function reveal() {
  var reveals = document.querySelectorAll('.reveal2')
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active2')
    } else {
      reveals[i].classList.remove('active2')
    }
  }
}

const revealOnLoad = () => {
  const revealElementOnLoad = document.querySelectorAll('.reveal3')
  for (let i = 0; i < revealElementOnLoad.length; i++) {
    revealElementOnLoad[i].classList.add('active3')
  }
}

window.addEventListener('scroll', reveal)
window.addEventListener('load', revealOnLoad)

// END OF ANIMATION EFFECTS

// COUNTRY SEARCH AND FETCH API WITH COUNTRIES AND CALL CODES
// COUNTRY SEARCH AND FETCH API WITH COUNTRIES AND CALL CODES
// COUNTRY SEARCH AND FETCH API WITH COUNTRIES AND CALL CODES

const listOfAllCountries = fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      arrOfCountries.push(data[i].name.common)
      arrOfCodes.push({
        country: data[i].name.common,
        code: data[i].idd.root + data[i].idd.suffixes,
      })
    }
  })

const arrOfCountries = []
const arrOfCodes = []

// searchCountryInput.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault()
//     const regex = /${searchCountryInput.value}/gi
//     console.log(regex)
//   }
// })

// PHONE SETTINGS
// PHONE SETTINGS
// PHONE SETTINGS

countryCode.addEventListener('click', () => {
  countryList.classList.toggle('hidden')
  for (let i = 0; i < arrOfCountries.length; i++) {
    countryListUl.innerHTML += `
    <li>${arrOfCountries[i]}</li>
    `
  }
  const countryListLi = countryListUl.children

  console.log(countryListLi)

  for (let c of countryListLi) {
    c.addEventListener('click', (e) => {
      const countryName = e.target.textContent
      for (let i = 0; i < arrOfCodes.length; i++) {
        if (countryName == arrOfCodes[i].country) {
          const callCode = arrOfCodes[i].code
          countryText.textContent = callCode
          countryText.style.color = 'var(--BEIGE)'
          countryList.classList.toggle('hidden')
        }
      }
    })
  }
})

const countryDataApi = (searchCountryInput.onkeyup = (e) => {
  countryListUl.innerHTML = ''
  let userData = e.target.value
  console.log(userData)
  let selectedCountryArr = []
  if (userData) {
    selectedCountryArr = arrOfCountries.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
    })

    selectedCountryArr = selectedCountryArr.map((data) => {
      return data
    })
    console.log(selectedCountryArr)
    for (let i = 0; i < selectedCountryArr.length; i++) {
      console.log(selectedCountryArr[i])

      countryListUl.innerHTML += `
    <li class='searched-country'>${selectedCountryArr[i]}</li>
    `
    }
    const countryListLi = countryListUl.children

    console.log(countryListLi)

    for (let c of countryListLi) {
      c.addEventListener('click', (e) => {
        const countryName = e.target.textContent
        for (let i = 0; i < arrOfCodes.length; i++) {
          if (countryName == arrOfCodes[i].country) {
            const callCode = arrOfCodes[i].code
            countryText.textContent = callCode
            countryList.classList.toggle('hidden')
          }
        }
        searchCountryInput.value = ''
      })
    }
  }
})
