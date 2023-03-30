import dataItems from './dataItems.js'

const backBtn = document.querySelector('.back-btn-container')
const itemDataContainer = document.querySelector('.itemDataContainer')

// IMPORTING DATA VARIABLE
const dataItem = localStorage

// ITERATE THROUGH DATA INFO
console.log(dataItems)

let selectedItemData = dataItems.filter((item) => item.title === dataItem.title)

// RANDOM NUMBER
const randomNumber1 = Math.floor(Math.random() * dataItems.length)
const randomNumber2 = Math.floor(Math.random() * dataItems.length)
const randomNumber3 = Math.floor(Math.random() * dataItems.length)
const randomNumber4 = Math.floor(Math.random() * dataItems.length)
const randomNumber5 = Math.floor(Math.random() * dataItems.length)

// BACK TO LIST BUTTON
// BACK TO LIST BUTTON

backBtn.addEventListener('click', () => {
  window.history.back()
})

// INTRODUCING INFORMATION/DATA ABOUT THE ITEM
// INTRODUCING INFORMATION/DATA ABOUT THE ITEM
// INTRODUCING INFORMATION/DATA ABOUT THE ITEM

const itemContainer = document.createElement('div')
const recommendationContainer = document.createElement('div')

itemDataContainer.appendChild(itemContainer)
itemDataContainer.appendChild(recommendationContainer)
itemContainer.classList.add('item-container')
recommendationContainer.classList.add('recommendation-container')

itemContainer.innerHTML = `
    <div class="item-img" style = "background-image: url(./items/${selectedItemData[0].img})"></div>
    <div class="right-container">
      <div class="item-titles-container">
        <h1 class="item-brand">${selectedItemData[0].brand}</h1>
        <div class="item-text-line">-</div>
      <h2 class="item-title">${selectedItemData[0].title}</h2>
      </div>
      
      <h3 class="item-price"><i class="fa-solid fa-tags"></i><span>${selectedItemData[0].price} €</span> </h3>
      <div class="quantity-container">
        <h3 class="quantity-label">Quantity</h3>
        <div class="quantity-box">
          <div class="decr-quant-btn"><i class="fa-sharp fa-solid fa-minus"></i></div>
          <div class="quantity-text">1</div>
          <div class="incr-quant-btn"><i class="fa-sharp fa-solid fa-plus"></i></div>
        </div>
        </div>
        <button class="addToCart">Add to cart</button>
        <div class="details-container">
          <p class="details-text">Length: ${selectedItemData[0].description.length}</p>
          <p class="details-text">Ring: ${selectedItemData[0].description.ring}</p>
          <p class="details-text">Size: ${selectedItemData[0].description.size}</p>
          <p class="details-text">Wrapper: ${selectedItemData[0].description.wrapper}</p>
          <p class="details-text">Binder: ${selectedItemData[0].description.binder}</p>
          <p class="details-text">Filler: ${selectedItemData[0].description.filler}</p>
          <p class="details-text">Strength: ${selectedItemData[0].description.strength}</p>
        </div>
    </div>

`

recommendationContainer.innerHTML = `
    <h2 class="recommendation-heading">You may also like</h2>
    <div class="recommendation-items">
      
      <div class="recommendation-item" style='background-image: url(./items/${dataItems[randomNumber1].img})'>
        <div class="recommendation-title-container">
          <span class="recommendation-brand">${dataItems[randomNumber1].brand}</span>
          <span class="recommendation-title">${dataItems[randomNumber1].title}</span>
        </div>
        <div class="recommendation-price">${dataItems[randomNumber1].price} Euro</div>
      </div>
      <div class="recommendation-item" style='background-image: url(./items/${dataItems[randomNumber2].img})'>
        <div class="recommendation-title-container">
          <span class="recommendation-brand">${dataItems[randomNumber2].brand}</span>
          <span class="recommendation-title">${dataItems[randomNumber2].title}</span>
        </div>
        <div class="recommendation-price">${dataItems[randomNumber2].price} Euro</div>
      </div>
      <div class="recommendation-item" style='background-image: url(./items/${dataItems[randomNumber3].img})'>
        <div class="recommendation-title-container">
          <span class="recommendation-brand">${dataItems[randomNumber3].brand}</span>
          <span class="recommendation-title">${dataItems[randomNumber3].title}</span>
        </div>
        <div class="recommendation-price">${dataItems[randomNumber3].price} Euro</div>
      </div>
      <div class="recommendation-item" style='background-image: url(./items/${dataItems[randomNumber4].img})'>
        <div class="recommendation-title-container">
          <span class="recommendation-brand">${dataItems[randomNumber4].brand}</span>
          <span class="recommendation-title">${dataItems[randomNumber4].title}</span>
        </div>
        <div class="recommendation-price">${dataItems[randomNumber4].price} Euro</div>
      </div>
      <div class="recommendation-item" style='background-image: url(./items/${dataItems[randomNumber5].img})'>
        <div class="recommendation-title-container">
          <span class="recommendation-brand">${dataItems[randomNumber5].brand}</span>
          <span class="recommendation-title">${dataItems[randomNumber5].title}</span>
        </div>
        <div class="recommendation-price">${dataItems[randomNumber5].price} Euro</div>
      </div>

    </div>
`
const recommendationItem = document.querySelectorAll('.recommendation-item')

for (let r of recommendationItem) {
  r.addEventListener('click', (e) => {
    const data = e.currentTarget.firstElementChild.lastElementChild.textContent
    let recommendedItemData = dataItems.filter((item) => item.title === data)

    itemContainer.innerHTML = `
    <div class="item-img" style = "background-image: url(./items/${recommendedItemData[0].img})"></div>
    <div class="right-container">
      <div class="item-titles-container">
        <h1 class="item-brand">${recommendedItemData[0].brand}</h1>
        <div class="item-text-line">-</div>
      <h2 class="item-title">${recommendedItemData[0].title}</h2>
      </div>
      
      <h3 class="item-price"><i class="fa-solid fa-tags"></i><span>${recommendedItemData[0].price} €</span> </h3>
      <div class="quantity-container">
        <h3 class="quantity-label">Quantity</h3>
        <div class="quantity-box">
          <div class="decr-quant-btn"><i class="fa-sharp fa-solid fa-minus"></i></div>
          <div class="quantity-text">1</div>
          <div class="incr-quant-btn"><i class="fa-sharp fa-solid fa-plus"></i></div>
        </div>
        </div>
        <button class="addToCart">Add to cart</button>
        <div class="details-container">
          <p class="details-text">Length: ${recommendedItemData[0].description.length}</p>
          <p class="details-text">Ring: ${recommendedItemData[0].description.ring}</p>
          <p class="details-text">Size: ${recommendedItemData[0].description.size}</p>
          <p class="details-text">Wrapper: ${recommendedItemData[0].description.wrapper}</p>
          <p class="details-text">Binder: ${recommendedItemData[0].description.binder}</p>
          <p class="details-text">Filler: ${recommendedItemData[0].description.filler}</p>
          <p class="details-text">Strength: ${recommendedItemData[0].description.strength}</p>
        </div>
    </div>

`
  })
}

// QUANTITY BOX SETTING
// QUANTITY BOX SETTING
let count = 1

const decrQuantBtn = document.querySelector('.decr-quant-btn')
const incrQuantBtn = document.querySelector('.incr-quant-btn')
const quantityText = document.querySelector('.quantity-text')

decrQuantBtn.addEventListener('click', () => {
  console.log(count)
  count--
  if (count > 0) {
    quantityText.innerText = count
  }
})

incrQuantBtn.addEventListener('click', () => {
  count++
  if (count > 0) {
    quantityText.innerText = count
  }
})
