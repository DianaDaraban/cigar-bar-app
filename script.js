window.onload = () => {
  const introBlack = document.getElementById('intro-black')
  setTimeout(() => {
    intro.innerHTML = `<video autoplay muted loop id='myVideo' >
                        <source src='./img/cigars.mp4' type="video/mp4">
                        </video>`
    intro.style.opacity = '0'
    intro.style.transition = 'all 3s'
    setTimeout(() => {
      intro.innerHTML = ''
      intro.style.opacity = '1'
      intro.style.transition = 'all .4s'
      setTimeout(() => {
        intro.innerHTML = `<video autoplay muted loop id='myVideo'>
                        <source src='./img/whisky4.mp4' type="video/mp4">
                        </video>`
        intro.style.opacity = '0'
        intro.style.transition = 'all 4s'
        setTimeout(() => {
          intro.innerHTML = ``
          intro.style.opacity = '1'
          intro.style.transition = 'all .4s'
          setTimeout(() => {
            intro.innerHTML = `<video autoplay muted loop id='myVideo'>
                        <source src='./img/tobacco.mp4' type="video/mp4">
                        </video>`
            intro.style.opacity = '0'
            intro.style.transition = 'all 2s'
            setTimeout(() => {
              intro.innerHTML = ``
              intro.style.opacity = '1'
              intro.style.transition = 'all 2s'
              setTimeout(() => {
                intro.innerHTML = `<video autoplay muted loop id='myVideo'>
                        <source src='./img/whisky-background2.mp4' type="video/mp4">
                        </video>`
                intro.style.opacity = '1'
                intro.style.transition = 'all 3s'
                setTimeout(() => {
                  intro.style.opacity = '0'
                  intro.style.transition = 'all 1s'
                  intro.style.zIndex = '-500'
                  introBlack.classList.add('hidden')
                }, 1200)
              }, 300)
            }, 1000)
          }, 300)
        }, 2000)
      }, 300)
    }, 1200)
  }, 300)
}

const revealOnLoad2 = () => {
  setTimeout(() => {
    const revealElementOnLoad = document.querySelectorAll('.reveal3')
    for (let i = 0; i < revealElementOnLoad.length; i++) {
      revealElementOnLoad[i].classList.add('active3')
    }
  }, 7000)
}

window.addEventListener('load', revealOnLoad2)

// TESTIMONIAL CAROUSEL SET
// TESTIMONIAL CAROUSEL SET
// TESTIMONIAL CAROUSEL SET

const leftArrowTestimonial = document.querySelector('.fa-chevron-left')
const rightArrowTestimonial = document.querySelector('.fa-chevron-right')
const testimonialItem1 = document.querySelector('.testimonial-items-1')
const testimonialItem2 = document.querySelector('.testimonial-items-2')
const testimonialItem3 = document.querySelector('.testimonial-items-3')

const reviews = fetch('https://dummyjson.com/posts')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.posts[0])

    const leftFlip = () => {
      testimonialItem1.classList.remove('transition4')
      testimonialItem3.classList.remove('transition5')
      let i = Math.floor(Math.random() * data.posts.length)
      let m = Math.floor(Math.random() * 6)
      console.log(m)

      testimonialItem1.classList.toggle('transition2')
      testimonialItem3.classList.toggle('transition3')
      const users = [
        'Demi Parkes',
        'Jonathan Williamson',
        'Samira Panina',
        'Yvette Kirillova',
        'Olivie Labbé',
        'Owen Rule',
        'Lauren Bellew',
      ]
      testimonialItem1.innerHTML = `
      <div class="testimonial-text-container-1">
                      <div class="container-picture-testimonial">
                        <div class="star-1 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-2 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-3 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-4 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-5 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                      </div>
                      <h3 class="testimonial-title transition fifteen-chars">${
                        data.posts[i - 1].title
                      }</h3>
                      <p class='transition fifty-chars'>
                        "${data.posts[i - 1].body}"
                      </p>
                      <h3p class="testimonial-name transition">${
                        users[m + 2]
                      }</h3p>
                    </div>
      `
      testimonialItem2.innerHTML = `
       <div class="testimonial-text-container-1">
                      <div class="container-picture-testimonial">
                        <div class="star-1 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-2 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-3 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-4 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-5 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                      </div>
                      <h3 class="testimonial-title transition fifteen-chars">${data.posts[i].title}</h3>
                      <p class='transition fifty-chars'>
                        "${data.posts[i].body}"
                      </p>
                      <h3p class="testimonial-name transition">${users[m]}</h3p>
                    </div>
                    <div class="testimonial-leaf-1"></div>
      `
      testimonialItem3.innerHTML = `
       <div class="testimonial-text-container-1">
                      <div class="container-picture-testimonial">
                        <div class="star-1 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-2 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-3 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-4 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-5 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                      </div>
                      <h3 class="testimonial-title transition fifteen-chars">${
                        data.posts[i + 1].title
                      }</h3>
                      <p class='transition fifty-chars'>
                        "${data.posts[i + 1].body}"
                      </p>
                      <h3p class="testimonial-name transition">${
                        users[m + 1]
                      }</h3p>
                    </div>
                    
      `
    }
    leftArrowTestimonial.addEventListener('click', leftFlip)

    const rightFlip = () => {
      testimonialItem1.classList.remove('transition2')
      testimonialItem3.classList.remove('transition3')
      let i = Math.floor(Math.random() * data.posts.length)
      let m = Math.floor(Math.random() * 6)
      console.log(m)
      testimonialItem1.classList.toggle('transition4')
      testimonialItem3.classList.toggle('transition5')
      const users = [
        'Demi Parkes',
        'Jonathan Williamson',
        'Samira Panina',
        'Yvette Kirillova',
        'Olivie Labbé',
        'Owen Rule',
        'Lauren Bellew',
      ]
      testimonialItem1.innerHTML = `
       <div class="testimonial-text-container-1">
                      <div class="container-picture-testimonial">
                        <div class="star-1 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-2 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-3 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-4 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-5 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                      </div>
                      <h3 class="testimonial-title transition fifteen-chars">${
                        data.posts[i - 1].title
                      }</h3>
                      <p class='transition fifty-chars'>
                        "${data.posts[i - 1].body}"
                      </p>
                      <h3p class="testimonial-name transition">${
                        users[m + 2]
                      }</h3p>
                    </div>
      `
      testimonialItem2.innerHTML = `
       <div class="testimonial-text-container-1">
                      <div class="container-picture-testimonial">
                        <div class="star-1 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-2 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-3 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-4 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-5 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                      </div>
                      <h3 class="testimonial-title transition fifteen-chars">${data.posts[i].title}</h3>
                      <p class='transition fifty-chars'>
                        "${data.posts[i].body}"
                      </p>
                      <h3p class="testimonial-name transition">${users[m]}</h3p>
                    </div>
                    <div class="testimonial-leaf-1"></div>
      `
      testimonialItem3.innerHTML = `
       <div class="testimonial-text-container-1">
                      <div class="container-picture-testimonial">
                        <div class="star-1 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-2 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-3 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-4 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="star-5 transition">
                          <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                      </div>
                      <h3 class="testimonial-title transition fifteen-chars">${
                        data.posts[i + 1].title
                      }</h3>
                      <p class='transition fifty-chars'>
                        "${data.posts[i + 1].body}"
                      </p>
                      <h3p class="testimonial-name transition">${
                        users[m + 1]
                      }</h3p>
                    </div>
                    
      `
    }

    rightArrowTestimonial.addEventListener('click', rightFlip)
  })
