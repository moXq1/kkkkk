class Slider {
  constructor() {
    this.slider = document.querySelector(".hero__slider")
    this.slides = [...document.querySelectorAll(".hero__slide")]
    this.glider = document.querySelector(".hero__slider-line")
    this.curSlide = 0

    this.totalSlides = this.slides.length
    this.next = document.querySelector(".hero__next")
    this.prev = document.querySelector(".hero__prev")
  }

  init() {
    this.next.addEventListener("click", this.nextSlide)
    this.prev.addEventListener("click", this.prevSlide)
  }

  nextSlide = () => {
    this.curSlide++
    if (this.curSlide > this.totalSlides - 1) {
      this.curSlide = 0
      this.glider.style.transform = `translateX(0) `
    } else {
      this.glider.style.transform = `translateX(${-this.curSlide * 100 - 3}%)`
    }
  }

  prevSlide = () => {
    this.curSlide--

    if (this.curSlide < 0) {
      this.curSlide = this.totalSlides - 1

      this.glider.style.transform = `translateX(${-this.curSlide * 100 - 3}%)`
    } else {
      this.glider.style.transform = `translateX(${-this.curSlide * 100 - 3}%)`
    }
  }
}

const slider = new Slider()
slider.init()

function navigationToggler() {
  const openNavigationBtn = document.querySelector(".navigation__hamb-box")
  const closeNavigationBtn = document.querySelector(".navigation__close")
  const navigation = document.querySelector(".navigation")

  openNavigationBtn.addEventListener("click", toggleNav)
  closeNavigationBtn.addEventListener("click", toggleNav)

  navigation.addEventListener("click", (e) => {
    e.preventDefault()
    const target = e.target.closest(".navigation__goto")
    if (target) {
      window.location.href = target.href
      toggleNav()
    }
  })

  function toggleNav() {
    navigation.classList.toggle("navigation--show")
  }
}

navigationToggler()
