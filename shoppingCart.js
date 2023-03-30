// ADD TO CART BUTTON SETTINGS
// ADD TO CART BUTTON SETTINGS
// ADD TO CART BUTTON SETTINGS
const addToCartBtn = document.getElementsByClassName('addToCart-btn')
const shoppingCounter = document.querySelector('.shopping-counter')
const product = document.querySelector('.item')
const counterContainer = document.querySelector('.counter-container')
const itemsRow = document.querySelector('.items-row')
const totalAmount = document.querySelector('.total-amount')
const itemPrices = document.getElementsByClassName('item-price-box')
const itemRemoveBtn = document.getElementsByClassName('item-remove-btn')
let counter = 1
let counter2 = 1
let priceOtTotalItems = 1

export const addingToCart = () => {
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
      for (let c of itemRemoveBtn) {
        c.addEventListener('click', (e) => {
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
        })
      }

      return counter
    })
  }
}
addingToCart()
