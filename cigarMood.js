const revealOnLoad5 = () => {
  const revealElementOnLoad5 = document.querySelector('.reveal5')
  const revealElementOnLoad6 = document.querySelector('.reveal6')
  const revealElementOnLoad7 = document.querySelector('.reveal7')
  const revealElementOnLoad8 = document.querySelector('.reveal8')
  const revealElementOnLoad9 = document.querySelector('.reveal9')

  revealElementOnLoad5.classList.add('active5')
  //   revealElementOnLoad6.classList.add('active6')
  //   revealElementOnLoad7.classList.add('active7')
  //   revealElementOnLoad8.classList.add('active8')
  //   revealElementOnLoad9.classList.add('active9')
  setTimeout(() => {
    revealElementOnLoad6.classList.add('active6')
    setTimeout(() => {
      revealElementOnLoad7.classList.add('active7')
      setTimeout(() => {
        revealElementOnLoad8.classList.add('active8')
        setTimeout(() => {
          revealElementOnLoad9.classList.add('active9')
        }, 400)
      }, 400)
    }, 400)
  }, 700)
}

window.addEventListener('load', revealOnLoad5)
