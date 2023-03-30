import info from './dataInfo.js'

const allInfoContainer = document.querySelector('.about-cigar-container')

// DISPLAY INFO ELEMENTS IN INFO SECTION
// DISPLAY INFO ELEMENTS IN INFO SECTION
// DISPLAY INFO ELEMENTS IN INFO SECTION
for (let i = 0; i < info.length; i++) {
  const singleInfoContainer = document.createElement('div')
  singleInfoContainer.classList.add('single-info-container')
  allInfoContainer.appendChild(singleInfoContainer)
  singleInfoContainer.innerHTML = `
  <div class="about-container">
            <h3 class="single-info-title">
              ${info[i].title}
            </h3>
            <p class="single-info-text-first">
              ${info[i].paragraph1} <span class="read-more">...Read More</span>
            </p>
<div class='restOfText hidden'>
${info[i].restText}
</div>
          <div class="arrow-container">
            <i
              class="fa-sharp fa-solid fa-angle-down left-selection-arrow-brand"
            ></i>
          </div>
        </div>
  
  `
}

// TOGGLE THE INFO SECTIONS
// TOGGLE THE INFO SECTIONS
// TOGGLE THE INFO SECTIONS

const arrowToggle = document.querySelectorAll('.arrow-container')

for (let a of arrowToggle) {
  a.addEventListener('click', (e) => {
    const arrow = e.currentTarget
    console.log(arrow.parentNode.children[2])
    arrow.classList.toggle('rotate')

    arrow.parentNode.children[2].classList.toggle('hidden')

    arrow.parentNode.children[1].firstElementChild.classList.toggle('hidden')
    arrow.parentNode.parentNode.classList.toggle('height')
  })
}

// ANIMATION EFFECTS
// ANIMATION EFFECTS
// ANIMATION EFFECTS

function reveal() {
  var reveals = document.querySelectorAll('.reveal')
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}

const revealOnLoad = () => {
  const revealElementOnLoad = document.querySelectorAll('.reveal3')

  for (let i = 0; i < revealElementOnLoad.length; i++) {
    revealElementOnLoad[i].classList.add('active3')
  }
  const revealElementOnLoad2 = document.querySelectorAll('.reveal4')
  setTimeout(() => {
    for (let i = 0; i < revealElementOnLoad2.length; i++) {
      revealElementOnLoad2[i].classList.add('active4')
    }
  }, 1000)
}

window.addEventListener('scroll', reveal)
window.addEventListener('load', revealOnLoad)
