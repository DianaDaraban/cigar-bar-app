import data from './data.js'
import dataItems from './dataItems.js'

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
const selectionText = document.querySelector('.selection-text')
const selectionArrow = document.querySelector('.selection-arrow')
const selectionBtn = document.querySelector('.selection-btn')
const dropList = document.querySelector('.dropDown-list')
const selectionDrop = document.querySelector('.selection-drop')
const itemsGrid = document.querySelector('.items-grid')
const leftSelectionBtn = document.querySelector('.left-side-selection-btn')
const brandElements = document.querySelector('.brand-elements')
const sizeElements = document.querySelector('.size-elements')
const occasionElements = document.querySelector('.occasion-elements')
const strengthElements = document.querySelector('.strength-elements')
const brandArrow = document.querySelector('.brand-arrow')
const sizeArrow = document.querySelector('.size-arrow')
const occasionArrow = document.querySelector('.occasion-arrow')
const strengthArrow = document.querySelector('.strength-arrow')
const leftSelectionArrowBrand = document.querySelector(
  '.left-selection-arrow-brand'
)
const leftSelectionArrowSize = document.querySelector(
  '.left-selection-arrow-size'
)
const leftSelectionArrowOccasion = document.querySelector(
  '.left-selection-arrow-occasion'
)
const leftSelectionArrowStrength = document.querySelector(
  '.left-selection-arrow-strength'
)
const checkBoxLabel = document.getElementsByClassName(
  'brand-checkbox-container'
)
const sizeBoxLabel = document.getElementsByClassName('size-checkbox-container')
const occasionBoxLabel = document.getElementsByClassName(
  'occasion-checkbox-container'
)
const strengthBoxLabel = document.getElementsByClassName(
  'strength-checkbox-container'
)
const backFace = document.getElementsByClassName('back-face')
const backFaceItem = document.getElementsByClassName('moreInfo-container')
const frontFaceItem = document.getElementsByClassName('item-cigar')

// export { detailedItem }

// SET DATA FOR SEARCH
// SET DATA FOR SEARCH
// SET DATA FOR SEARCH

const preferencesArr = []
const preferencesItems = []

data.map((element) => {
  const preferences = element.preference
  const prefItems = element.item
  preferencesArr.push(preferences)
  preferencesItems.push(prefItems)
})

// SEARCH BOX SETTINGS
//
//
//
//DROP-DOWN LIST SETTINGS
//DROP-DOWN LIST SETTINGS
selectionArrow.addEventListener('click', () => selectionArrowFunc())

const selectionArrowFunc = () => {
  if (dropList.classList.contains('hidden')) {
    dropList.classList.remove('hidden')
    for (let i = 0; i < preferencesArr.length; i++) {
      dropList.innerHTML += `<div class='selection-element' category='${preferencesArr[i]}'><i class="fa-solid fa-chevron-right"></i> ${preferencesArr[i]}</div>`
    }
  } else {
    dropList.classList.add('hidden')
    dropList.innerHTML = ''
  }

  preferencesBtns()
  addingToCart()
}

// DYNAMIC SELECTION INFO UPLOADING
// DYNAMIC SELECTION INFO UPLOADING

function preferencesBtns() {
  // SELECTION OF THE SEARCHING PREFERENCE
  dropList.childNodes.forEach((elem) =>
    elem.addEventListener('click', (e) => {
      let category = e.currentTarget.getAttribute('category')
      selectionDrop.innerText = category
      // CHANGE TEXT FOR DROP-DOWN LIST, ADDING PREFERENCE ITEMS, LIKE BRAND AND SIZE
      if (category === 'shop by brand') {
        dropList.innerHTML = ''
        for (let i = 0; i < preferencesItems[0].length; i++) {
          dropList.innerHTML += `<div class='selection-element' category='${preferencesItems[0][i]}'><i class="fa-solid fa-chevron-right"></i> ${preferencesItems[0][i]}</>`
        }
        // SET THE TEXT IN THE SEARCH BOX FOR THE PREFERENCE CATEGORY
        dropList.childNodes.forEach((elem) =>
          elem.addEventListener('click', (e) => {
            let category = e.currentTarget.getAttribute('category')
            selectionText.innerText = category
            dropList.classList.add('hidden')
          })
        )
      } else if (category === 'shop by size') {
        // CHANGE TEXT FOR DROP-DOWN LIST, ADDING PREFERENCE ITEMS, LIKE BRAND AND SIZE
        dropList.innerHTML = ''
        for (let i = 0; i < preferencesItems[1].length; i++) {
          dropList.innerHTML += `<div class='selection-element' category='${preferencesItems[1][i]}'><i class="fa-solid fa-chevron-right"></i> ${preferencesItems[1][i]}</>`
        }
        // SET THE TEXT IN THE SEARCH BOX FOR THE PREFERENCE CATEGORY
        dropList.childNodes.forEach((elem) =>
          elem.addEventListener('click', (e) => {
            let category = e.currentTarget.getAttribute('category')
            selectionText.innerText = category
            dropList.classList.add('hidden')
          })
        )
      } else if (category === 'shop by occasion') {
        // CHANGE TEXT FOR DROP-DOWN LIST, ADDING PREFERENCE ITEMS, LIKE BRAND AND SIZE
        dropList.innerHTML = ''
        for (let i = 0; i < preferencesItems[2].length; i++) {
          dropList.innerHTML += `<div class='selection-element' category='${preferencesItems[2][i]}'><i class="fa-solid fa-chevron-right"></i> ${preferencesItems[2][i]}</>`
        }
        // SET THE TEXT IN THE SEARCH BOX FOR THE PREFERENCE CATEGORY
        dropList.childNodes.forEach((elem) =>
          elem.addEventListener('click', (e) => {
            let category = e.currentTarget.getAttribute('category')
            selectionText.innerText = category
            dropList.classList.add('hidden')
          })
        )
      } else if (category === 'shop by strength') {
        // CHANGE TEXT FOR DROP-DOWN LIST, ADDING PREFERENCE ITEMS, LIKE BRAND AND SIZE
        dropList.innerHTML = ''
        for (let i = 0; i < preferencesItems[3].length; i++) {
          dropList.innerHTML += `<div class='selection-element' category='${preferencesItems[3][i]}'><i class="fa-solid fa-chevron-right"></i> ${preferencesItems[3][i]}</>`
        }
        // SET THE TEXT IN THE SEARCH BOX FOR THE PREFERENCE CATEGORY
        dropList.childNodes.forEach((elem) =>
          elem.addEventListener('click', (e) => {
            let category = e.currentTarget.getAttribute('category')
            selectionText.innerText = category
            dropList.classList.add('hidden')
          })
        )
      }
    })
  )
}

// END OF DYNAMIC SELECTION INFO UPLOADING
// END OF DYNAMIC SELECTION INFO UPLOADING

// ITEMS GRID STYLING
// ITEMS GRID STYLING
// ITEMS GRID STYLING

for (let i = 0; i < dataItems.length; i++) {
  itemsGrid.innerHTML += `<div class='all-items-container'>
  <div class="item-cigar" style='background-image: url(./items/${dataItems[i].img})' >
              <h2 class="cigar-brand">${dataItems[i].brand}</h2>
              <div class="cigar-title-container">
                <div class="plus-container">+</div>
                <h3 class="cigar-title">${dataItems[i].title}</h3>
              </div>
            </div>

            <div class='back-face flipped'>
            <h2 class="back-brand">${dataItems[i].brand}</h2>
      <h3 class="back-title">${dataItems[i].title}</h3>
      <ul class='item-description'>
        <li>Length: ${dataItems[i].description.length}</li>
        <li>Ring: ${dataItems[i].description.ring}</li>
        <li>Size: ${dataItems[i].description.size}</li>
        <li>Wrapper: ${dataItems[i].description.wrapper}</li>
        <li>Binder: ${dataItems[i].description.binder}</li>
        <li>Filler: ${dataItems[i].description.filler}</li>
        <li>Strength: ${dataItems[i].description.strength}</li>
      </ul>
      <div class='bottom-btns'>
      <button class='addToCart-btn'>Add To Cart</button>
       <div class="moreInfo-container">
       <h3 class="more-info-text">Explore</h3>
       <div class="plus-container-info">+</div>
              </div>
      </div>
    </div>
            </div>`
}

selectionBtn.addEventListener('click', () => {
  itemsGrid.innerHTML = ''

  for (let i = 0; i < dataItems.length; i++) {
    if (dataItems[i].brand == selectionText.textContent) {
      itemsGrid.innerHTML += `<div class='all-items-container'>
      <div class="item-cigar" style='background-image: url(./items/${dataItems[i].img})' >
              <h2 class="cigar-brand">${dataItems[i].brand}</h2>
              <div class="cigar-title-container">
                <div class="plus-container">+</div>
                <h3 class="cigar-title">${dataItems[i].title}</h3>
              </div>
            </div>

            <div class='back-face flipped'>
            <h2 class="back-brand">${dataItems[i].brand}</h2>
       <h3 class="back-title">${dataItems[i].title}</h3>
       <ul class='item-description'>
        <li>Length: ${dataItems[i].description.length}</li>
         <li>Ring: ${dataItems[i].description.ring}</li>
         <li>Size: ${dataItems[i].description.size}</li>
         <li>Wrapper: ${dataItems[i].description.wrapper}</li>
         <li>Binder: ${dataItems[i].description.binder}</li>
         <li>Filler: ${dataItems[i].description.filler}</li>
         <li>Strength: ${dataItems[i].description.strength}</li>
       </ul>
             <div class='bottom-btns'>
      <button class='addToCart-btn'>Add To Cart</button>
       <div class="moreInfo-container">
       <h3 class="more-info-text">Explore</h3>
       <div class="plus-container-info">+</div>
              </div>
      </div>
    </div>
    <div>
            `
    } else if (dataItems[i].strength == selectionText.textContent) {
      itemsGrid.innerHTML += `<div class='all-items-container'>
      <div class="item-cigar" style='background-image: url(./items/${dataItems[i].img})' >
              <h2 class="cigar-brand">${dataItems[i].brand}</h2>
              <div class="cigar-title-container">
                <div class="plus-container">+</div>
                <h3 class="cigar-title">${dataItems[i].title}</h3>
              </div>
            </div>

                        <div class='back-face flipped'>
            <h2 class="back-brand">${dataItems[i].brand}</h2>
       <h3 class="back-title">${dataItems[i].title}</h3>
       <ul class='item-description'>
         <li>Length: ${dataItems[i].description.length}</li>
         <li>Ring: ${dataItems[i].description.ring}</li>
         <li>Size: ${dataItems[i].description.size}</li>
         <li>Wrapper: ${dataItems[i].description.wrapper}</li>
         <li>Binder: ${dataItems[i].description.binder}</li>
         <li>Filler: ${dataItems[i].description.filler}</li>
         <li>Strength: ${dataItems[i].description.strength}</li>
       </ul>
             <div class='bottom-btns'>
      <button class='addToCart-btn'>Add To Cart</button>
       <div class="moreInfo-container">
       <h3 class="more-info-text">Explore</h3>
       <div class="plus-container-info">+</div>
              </div>
      </div>
    </div>
    </div>`
    } else if (dataItems[i].size == selectionText.textContent) {
      itemsGrid.innerHTML += `<div class='all-items-container'>
      <div class="item-cigar" style='background-image: url(./items/${dataItems[i].img})' >
              <h2 class="cigar-brand">${dataItems[i].brand}</h2>
              <div class="cigar-title-container">
                <div class="plus-container">+</div>
                <h3 class="cigar-title">${dataItems[i].title}</h3>
              </div>
            </div>
            
                        <div class='back-face flipped'>
            <h2 class="back-brand">${dataItems[i].brand}</h2>
       <h3 class="back-title">${dataItems[i].title}</h3>
       <ul class='item-description'>
         <li>Length: ${dataItems[i].description.length}</li>
         <li>Ring: ${dataItems[i].description.ring}</li>
         <li>Size: ${dataItems[i].description.size}</li>
         <li>Wrapper: ${dataItems[i].description.wrapper}</li>
         <li>Binder: ${dataItems[i].description.binder}</li>
         <li>Filler: ${dataItems[i].description.filler}</li>
         <li>Strength: ${dataItems[i].description.strength}</li>
       </ul>
             <div class='bottom-btns'>
      <button class='addToCart-btn'>Add To Cart</button>
       <div class="moreInfo-container">
       <h3 class="more-info-text">Explore</h3>
       <div class="plus-container-info">+</div>
              </div>
      </div>
    </div>
    </div>`
    } else if (dataItems[i].occasion == selectionText.textContent) {
      console.log(dataItems[i].brand)
      itemsGrid.innerHTML += `<div class='all-items-container'>
      <div class="item-cigar" style='background-image: url(./items/${dataItems[i].img})' >
              <h2 class="cigar-brand">${dataItems[i].brand}</h2>
              <div class="cigar-title-container">
                <div class="plus-container">+</div>
                <h3 class="cigar-title">${dataItems[i].title}</h3>
              </div>
            </div>
            
                        <div class='back-face flipped'>
            <h2 class="back-brand">${dataItems[i].brand}</h2>
       <h3 class="back-title">${dataItems[i].title}</h3>
       <ul class='item-description'>
         <li>Length: ${dataItems[i].description.length}</li>
         <li>Ring: ${dataItems[i].description.ring}</li>
         <li>Size: ${dataItems[i].description.size}</li>
         <li>Wrapper: ${dataItems[i].description.wrapper}</li>
         <li>Binder: ${dataItems[i].description.binder}</li>
         <li>Filler: ${dataItems[i].description.filler}</li>
         <li>Strength: ${dataItems[i].description.strength}</li>
       </ul>
             <div class='bottom-btns'>
      <button class='addToCart-btn'>Add To Cart</button>
       <div class="moreInfo-container">
       <h3 class="more-info-text">Explore</h3>
       <div class="plus-container-info">+</div>
              </div>
      </div>
    </div>
    </div>`
    }
  }

  selectionDrop.innerText = 'Shopping Preferences'
  selectionText.innerText = 'Shop By ...'
  dropList.innerHTML = ''
  openItemDetailsPage()
  addingToCart()
})

// INITIATE AN EMPTY OBJECT FOR LEFT SIDE DROP DOWN LISTS SELECTION
const objOfSelections = {
  brand: [],
  size: [],
  occasion: [],
  strength: [],
}

// SET THE BRAND CHECKBOX LIST
// SET THE BRAND CHECKBOX LIST
// SET THE BRAND CHECKBOX LIST
let isExtendedBrand = false
const brandCheckBox = document.createElement('div')
brandElements.appendChild(brandCheckBox)
brandCheckBox.classList.add('brand-checkbox-container')

// SET THE ARROW BUTTON FOR DROP DOWN CHECK LIST
// SET THE ARROW BUTTON FOR DROP DOWN CHECK LIST
brandArrow.addEventListener('click', () => {
  if (!isExtendedBrand == true) {
    checkBoxLabel[0].classList.remove('hidden')
    leftSelectionArrowBrand.style.transform = 'rotate(180deg)'

    for (let i = 0; i < data[0].item.length; i++) {
      brandCheckBox.innerHTML += `<div class="brand-elem">
      <div class="brand-label">${data[0].item[i]}</div>
      <div class="checkbox">
      <div class="brand-check"></div>
      <div class="checkbox-box hidden"></div>
      </div>
      </div>`
    }
    // SETTING THE CHECK MARKER FOR BRAND CHECKBOX
    // SETTING THE CHECK MARKER FOR BRAND CHECKBOX
    const brandsCheckBoxList = brandCheckBox.childNodes

    for (let elem of brandsCheckBoxList) {
      elem.addEventListener('click', (e) => {
        const brandItem = e.currentTarget

        objOfSelections.brand.push(brandItem.firstElementChild.textContent)

        brandItem.lastElementChild.lastElementChild.classList.toggle('hidden')
      })
    }

    isExtendedBrand = true
    return isExtendedBrand
  } else {
    brandCheckBox.innerHTML = ''
    checkBoxLabel[0].classList.toggle('hidden')
    leftSelectionArrowBrand.style.transform = 'none'

    isExtendedBrand = false
    return isExtendedBrand
  }
})

// SET THE SIZE CHECKBOX LIST
// SET THE SIZE CHECKBOX LIST
// SET THE SIZE CHECKBOX LIST
let isExtendedSize = false
const sizeCheckBox = document.createElement('div')
sizeElements.appendChild(sizeCheckBox)
sizeCheckBox.classList.add('size-checkbox-container')

// SET THE ARROW BUTTON FOR DROP DOWN CHECK LIST
// SET THE ARROW BUTTON FOR DROP DOWN CHECK LIST
sizeArrow.addEventListener('click', () => {
  if (!isExtendedSize == true) {
    sizeBoxLabel[0].classList.remove('hidden')
    leftSelectionArrowSize.style.transform = 'rotate(180deg)'

    for (let i = 0; i < data[1].item.length; i++) {
      sizeCheckBox.innerHTML += `<div class="size-elem">
      <div class="size-label">${data[1].item[i]}</div>
      <div class="size-checkbox">
      <div class="size-check"></div>
      <div class="size-checkbox-box hidden"></div>
      </div>
      </div>`
    }
    // SETTING THE CHECK MARKER FOR BRAND CHECKBOX
    // SETTING THE CHECK MARKER FOR BRAND CHECKBOX
    const sizesCheckBoxList = sizeCheckBox.childNodes

    for (let elem of sizesCheckBoxList) {
      elem.addEventListener('click', (e) => {
        const sizeItem = e.currentTarget

        objOfSelections.size.push(sizeItem.firstElementChild.textContent)

        sizeItem.lastElementChild.lastElementChild.classList.toggle('hidden')
      })
    }

    isExtendedSize = true
    return isExtendedSize
  } else {
    sizeCheckBox.innerHTML = ''
    sizeBoxLabel[0].classList.toggle('hidden')
    leftSelectionArrowSize.style.transform = 'none'

    isExtendedSize = false
    return isExtendedSize
  }
})
// SET THE OCCASION CHECKBOX LIST
// SET THE OCCASION CHECKBOX LIST
// SET THE OCCASION CHECKBOX LIST
let isExtendedOccasion = false
const occasionCheckBox = document.createElement('div')
occasionElements.appendChild(occasionCheckBox)
occasionCheckBox.classList.add('occasion-checkbox-container')

// SET THE ARROW BUTTON FOR DROP DOWN CHECK LIST
// SET THE ARROW BUTTON FOR DROP DOWN CHECK LIST
occasionArrow.addEventListener('click', () => {
  if (!isExtendedOccasion == true) {
    occasionBoxLabel[0].classList.remove('hidden')
    leftSelectionArrowOccasion.style.transform = 'rotate(180deg)'

    for (let i = 0; i < data[2].item.length; i++) {
      occasionCheckBox.innerHTML += `<div class="occasion-elem">
      <div class="occasion-label">${data[2].item[i]}</div>
      <div class="occasion-checkbox">
      <div class="occasion-check"></div>
      <div class="occasion-checkbox-box hidden"></div>
      </div>
      </div>`
    }
    // SETTING THE CHECK MARKER FOR BRAND CHECKBOX
    // SETTING THE CHECK MARKER FOR BRAND CHECKBOX
    const occasionsCheckBoxList = occasionCheckBox.childNodes

    for (let elem of occasionsCheckBoxList) {
      elem.addEventListener('click', (e) => {
        const occasionItem = e.currentTarget

        objOfSelections.occasion.push(
          occasionItem.firstElementChild.textContent
        )

        occasionItem.lastElementChild.lastElementChild.classList.toggle(
          'hidden'
        )
      })
    }

    isExtendedOccasion = true
    return isExtendedOccasion
  } else {
    occasionCheckBox.innerHTML = ''
    occasionBoxLabel[0].classList.toggle('hidden')
    leftSelectionArrowOccasion.style.transform = 'none'

    isExtendedOccasion = false
    return isExtendedOccasion
  }
})

// SET THE STRENGTH CHECKBOX LIST
// SET THE STRENGTH CHECKBOX LIST
// SET THE STRENGTH CHECKBOX LIST

let isExtendedStrength = false
const strengthCheckBox = document.createElement('div')
strengthElements.appendChild(strengthCheckBox)
strengthCheckBox.classList.add('strength-checkbox-container')

// SET THE ARROW BUTTON FOR DROP DOWN CHECK LIST
// SET THE ARROW BUTTON FOR DROP DOWN CHECK LIST
strengthArrow.addEventListener('click', () => {
  if (!isExtendedStrength == true) {
    strengthBoxLabel[0].classList.remove('hidden')
    leftSelectionArrowStrength.style.transform = 'rotate(180deg)'

    for (let i = 0; i < data[3].item.length; i++) {
      strengthCheckBox.innerHTML += `<div class="strength-elem">
      <div class="strength-label">${data[3].item[i]}</div>
      <div class="strength-checkbox">
      <div class="strength-check"></div>
      <div class="strength-checkbox-box hidden"></div>
      </div>
      </div>`
    }
    // SETTING THE CHECK MARKER FOR BRAND CHECKBOX
    // SETTING THE CHECK MARKER FOR BRAND CHECKBOX

    const strengthsCheckBoxList = strengthCheckBox.childNodes

    for (let elem of strengthsCheckBoxList) {
      elem.addEventListener('click', (e) => {
        const strengthItem = e.currentTarget

        objOfSelections.strength.push(
          strengthItem.firstElementChild.textContent
        )

        strengthItem.lastElementChild.lastElementChild.classList.toggle(
          'hidden'
        )
      })
    }

    isExtendedStrength = true
    return isExtendedStrength
  } else {
    strengthCheckBox.innerHTML = ''
    strengthBoxLabel[0].classList.toggle('hidden')
    leftSelectionArrowStrength.style.transform = 'none'

    isExtendedStrength = false
    return isExtendedStrength
  }
})

// ITERATE THROUGH DATA ITEMS LIST
// ITERATE THROUGH DATA ITEMS LIST
// ITERATE THROUGH DATA ITEMS LIST

const selectedItems = () => {
  let itemsFirstIteration = dataItems
  if (objOfSelections.brand.length > 0) {
    itemsFirstIteration = dataItems.filter((item) => {
      for (let i = 0; i < objOfSelections.brand.length; i++) {
        if (item.brand.includes(objOfSelections.brand[i])) {
          return item
        }
      }
    })
  }

  let itemsSecondIteration = itemsFirstIteration

  if (objOfSelections.size.length > 0) {
    itemsSecondIteration = itemsFirstIteration.filter((item) => {
      for (let i = 0; i < objOfSelections.size.length; i++) {
        if (item.size.includes(objOfSelections.size[i])) {
          return item
        }
      }
    })
  }

  let itemsThirdIteration = itemsSecondIteration

  if (objOfSelections.occasion.length > 0) {
    itemsThirdIteration = itemsSecondIteration.filter((item) => {
      for (let i = 0; i < objOfSelections.occasion.length; i++) {
        if (item.occasion.includes(objOfSelections.occasion[i])) {
          return item
        }
      }
    })
  }

  let itemsFourthIteration = itemsThirdIteration

  if (objOfSelections.strength.length > 0) {
    itemsFourthIteration = itemsThirdIteration.filter((item) => {
      for (let i = 0; i < objOfSelections.strength.length; i++) {
        if (item.strength.includes(objOfSelections.strength[i])) {
          return item
        }
      }
    })
  }

  const resultOfSelection = itemsFourthIteration

  const dataOfSelection = new Set(resultOfSelection.flat(1))

  return dataOfSelection
}

// SETTING THE SELECTION BTN ON THE LEFT SIDE OF THE PAGE
// SETTING THE SELECTION BTN ON THE LEFT SIDE OF THE PAGE

leftSelectionBtn.addEventListener('click', () => {
  itemsGrid.innerHTML = ''
  const dataSelected = Array.from(selectedItems())

  console.log(dataSelected)

  for (let i = 0; i < dataSelected.length; i++) {
    itemsGrid.innerHTML += `<div class='all-items-container'>
      <div class="item-cigar" style='background-image: url(./items/${dataSelected[i].img})' >
              <h2 class="cigar-brand">${dataSelected[i].brand}</h2>
              <div class="cigar-title-container">
                <div class="plus-container">+</div>
                <h3 class="cigar-title">${dataSelected[i].title}</h3>
              </div>
            </div>

            <div class='back-face flipped'>
            <h2 class="back-brand">${dataSelected[i].brand}</h2>
       <h3 class="back-title">${dataSelected[i].title}</h3>
       <ul class='item-description'>
        <li>Length: ${dataSelected[i].description.length}</li>
         <li>Ring: ${dataSelected[i].description.ring}</li>
         <li>Size: ${dataSelected[i].description.size}</li>
         <li>Wrapper: ${dataSelected[i].description.wrapper}</li>
         <li>Binder: ${dataSelected[i].description.binder}</li>
         <li>Filler: ${dataSelected[i].description.filler}</li>
         <li>Strength: ${dataSelected[i].description.strength}</li>
       </ul>
             <div class='bottom-btns'>
      <button class='addToCart-btn'>Add To Cart</button>
       <div class="moreInfo-container">
       <h3 class="more-info-text">Explore</h3>
       <div class="plus-container-info">+</div>
              </div>
      </div>
    </div>
    <div>
            
            `
  }

  openItemDetailsPage()
  addingToCart()
})

// EACH ITEM PAGE WITH DETAILS AND CART SPECIFICATIONS
// EACH ITEM PAGE WITH DETAILS AND CART SPECIFICATIONS
// EACH ITEM PAGE WITH DETAILS AND CART SPECIFICATIONS
const openItemDetailsPage = () => {
  for (let b of backFaceItem) {
    b.addEventListener('click', (e) => {
      const detailedItem = {}
      detailedItem.brand =
        e.currentTarget.parentNode.parentNode.firstElementChild.textContent
      detailedItem.title =
        e.currentTarget.parentNode.parentNode.childNodes[3].textContent

      localStorage.clear()
      localStorage.setItem(
        'brand',
        e.currentTarget.parentNode.parentNode.firstElementChild.textContent
      )
      localStorage.setItem(
        'title',
        e.currentTarget.parentNode.parentNode.childNodes[3].textContent
      )

      location.href = 'cigarItemPage.html'
    })
  }
}

openItemDetailsPage()

// ADD TO CART BUTTON SETTINGS
// ADD TO CART BUTTON SETTINGS
const addToCartBtn = document.getElementsByClassName('addToCart-btn')
const shoppingCounter = document.querySelector('.shopping-counter')
const product = document.querySelector('.item')

const itemsRow = document.querySelector('.items-row')
const totalAmount = document.querySelector('.total-amount')
const itemPrices = document.getElementsByClassName('item-price-box')
const itemRemoveBtn = document.getElementsByClassName('item-remove-btn')

let counter = 1
let counter2 = 1
let priceOtTotalItems = 1

const removeItemsFromList = (e) => {
  e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.remove()
  e.currentTarget.previousElementSibling.previousElementSibling.remove()
  e.currentTarget.previousElementSibling.remove()
  e.currentTarget.remove()
  // CALCULATE THE TOTAL AMOUNT
  // CALCULATE THE TOTAL AMOUNT
  // CALCULATE THE TOTAL AMOUNT
  const arr = []
  for (let i = 0; i < itemPrices.length; i++) {
    arr.push(parseFloat(itemPrices[i].textContent))
  }
  const finalPrice = arr.reduce((item, sum) => {
    return item + sum
  }, 0)
  totalAmount.innerText = `${finalPrice.toFixed(2)} €`
}

const addingToCart = () => {
  for (let a of addToCartBtn) {
    a.addEventListener('click', () => {
      const itemTitle = a.parentNode.parentNode.children[1].textContent
      for (let i = 0; i < dataItems.length; i++) {
        if (dataItems[i].title == itemTitle) {
          shoppingCounter.innerText = counter++

          itemsRow.innerHTML += `
                            <div class="item">${dataItems[i].brand} ${dataItems[i].title}</div>
                    <div class="item-quantity">
                      <div class="decr-container">
                        <i class="fa-sharp fa-solid fa-minus"></i>
                      </div>
                      <div class="counter-container">${counter2}</div>
                      <div class="incr-container">
                        <i class="fa-sharp fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div class="item-price-box">${dataItems[i].price}€</div>
                    <div class="item-remove-btn">&times;</div>
        `
          // CALCULATE THE TOTAL AMOUNT
          // CALCULATE THE TOTAL AMOUNT
          // CALCULATE THE TOTAL AMOUNT
          const arr = []
          for (let i = 0; i < itemPrices.length; i++) {
            arr.push(parseFloat(itemPrices[i].textContent))
          }
          const finalPrice = arr.reduce((item, sum) => {
            return item + sum
          }, 0)
          totalAmount.innerText = `${finalPrice.toFixed(2)} €`
        }
      }

      // ADD OR REMOVE ITEMS

      const decrQuantity = document.getElementsByClassName('fa-minus')
      const incrQuantity = document.getElementsByClassName('fa-plus')

      for (let i = 0; i < dataItems.length; i++) {
        if (dataItems[i].title == itemTitle) {
          for (let c of decrQuantity) {
            c.addEventListener('click', (e) => {
              if (
                e.currentTarget.parentElement.nextElementSibling.innerText > 1
              ) {
                e.currentTarget.parentElement.nextElementSibling.innerText =
                  e.currentTarget.parentElement.nextElementSibling.innerText - 1
                priceOtTotalItems =
                  dataItems[i].price *
                  e.currentTarget.parentElement.nextElementSibling.innerText
                e.currentTarget.parentElement.parentElement.nextElementSibling.innerText = `${priceOtTotalItems.toFixed(
                  2
                )} €`

                // CALCULATE THE TOTAL AMOUNT
                // CALCULATE THE TOTAL AMOUNT
                // CALCULATE THE TOTAL AMOUNT
                const arr = []
                for (let i = 0; i < itemPrices.length; i++) {
                  arr.push(parseFloat(itemPrices[i].textContent))
                }
                const finalPrice = arr.reduce((item, sum) => {
                  return item + sum
                }, 0)
                totalAmount.innerText = `${finalPrice.toFixed(2)} €`
              }
            })
          }

          // SETTING THE INCR BTN
          // SETTING THE INCR BTN
          // SETTING THE INCR BTN

          for (let c of incrQuantity) {
            c.addEventListener('click', (e) => {
              e.currentTarget.parentElement.previousElementSibling.innerText =
                parseInt(
                  e.currentTarget.parentElement.previousElementSibling.innerText
                ) + 1
              priceOtTotalItems =
                dataItems[i].price *
                e.currentTarget.parentElement.previousElementSibling.innerText
              e.currentTarget.parentElement.parentElement.nextElementSibling.innerText = `${priceOtTotalItems.toFixed(
                2
              )} €`

              // CALCULATE THE TOTAL AMOUNT
              // CALCULATE THE TOTAL AMOUNT
              // CALCULATE THE TOTAL AMOUNT
              const arr = []
              for (let i = 0; i < itemPrices.length; i++) {
                arr.push(parseFloat(itemPrices[i].textContent))
              }
              const finalPrice = arr.reduce((item, sum) => {
                return item + sum
              }, 0)
              totalAmount.innerText = `${finalPrice.toFixed(2)} €`
            })
          }
        }
      }

      // REMOVING ITEMS FROM THE LIST
      // REMOVING ITEMS FROM THE LIST
      // REMOVING ITEMS FROM THE LIST

      for (let c of itemRemoveBtn) {
        c.addEventListener('click', removeItemsFromList)
      }

      return counter
    })
  }
}
addingToCart()

const decrQuantity = document.getElementsByClassName('fa-minus')
const incrQuantity = document.getElementsByClassName('fa-plus')
const counterContainer = document.getElementsByClassName('counter-container')
const removeBtnContainer = document.querySelector('.remove-btn')
const priceLabel = document.querySelector('.price')

const checkOutBtn = document.querySelector('.checkout-btn')
const taxesMessage = document.querySelector('.taxes-message')
const cartInfoContainer = document.querySelector('.info-container')

checkOutBtn.addEventListener('click', () => {
  for (let c of decrQuantity) {
    c.style.display = 'none'
  }
  for (let c of incrQuantity) {
    c.style.display = 'none'
  }
  for (let c of counterContainer) {
    c.style.borderBottom = 'none'
  }
  for (let c of itemRemoveBtn) {
    c.firstChild.textContent = ''
    c.removeEventListener('click', removeItemsFromList)
  }
  for (let c of itemPrices) {
    c.style.borderRight = 'none'
  }
  removeBtnContainer.style.display = 'none'
  priceLabel.style.borderRight = 'none'

  checkOutBtn.style.display = 'none'

  taxesMessage.style.display = 'none'

  cartInfoContainer.innerHTML += `
                  <div class="checkout-more-info">
                    <div class="shipping-container">
                      <p class="shipping-text">Shipping cost</p>
                      <p class="shipping-text">Free</p>
                    </div>
                    <div class="shipping-address-container">
                      <h4 class="shipping-address-title">Shipping Address</h4>
                      <div class="shipping-mail-container">
                        <label for="shipping-email">Email Address</label>
                        <input
                          type="email"
                          id="shipping-email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div class="shipping-names-container">
                        <div class="shipping-first-name-container">
                          <label for="shipping-firstName">First Name</label>
                          <input
                            type="text"
                            id="shipping-firstName"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div class="shipping-last-name-container">
                          <label for="shipping-lastName">Last Name</label>
                          <input
                            type="text"
                            id="shipping-lastName"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="shipping-street-address">
                        <label for="shipping-street-address"
                          >Street Address</label
                        >
                        <input
                          type="text"
                          id="shipping-street-address"
                          placeholder="Street Address"
                          required
                        />
                      </div>
                      <div class="shipping-country-city-container">
                        <div class="shipping-country-container">
                          <div class="country-code">
                            <div class="countryText">Country</div>
                            <i class="fa-sharp fa-solid fa-angle-down"></i>
                          </div>

                          <div class="countries-list hidden">
                            <input
                              class="search-country-input"
                              type="text"
                              placeholder="Search..."
                            />
                            <ul class="country-list"></ul>
                          </div>
                        </div>
                        <div class="city-container">
                          <div class="cityText">City</div>
                          <i class="fa-sharp fa-solid fa-angle-down"></i>
                        </div>
                      </div>
                      <div class="shipping-phone-number">
                        <label for="shipping-phone-number">Phone Number</label>
                        <input
                          type="number"
                          id="shipping-phone-number"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <h3 class="shopping order-btn">Place Order</h3>
                  </div>
        `
})
