import { createApp } from 'vue'
import { fadeOut, mapToAsocciatedObject, toggleClass, inView } from './lib.js'
import './scss/main.scss'
import './scss/responsive.scss'

import Serices from './containers/Services.vue'
import Features from './containers/Features.vue'
import Timeline from './containers/Timeline.vue'
import Progress from './containers/progress.vue'
import Portfolio from './containers/portfolio.vue'
import Pricing from './containers/Pricing.vue'
import Counters from './containers/Counters.vue'
import Team from './containers/Team.vue'
import Testimonial from './containers/Testimonial.vue'
import Blog from './containers/Blog.vue'

import backgrounds from './backgrounds.js'

const scrollSpy = () => {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const targets = document.querySelectorAll("header, .section"),
    links = mapToAsocciatedObject(targets, id => document.querySelector(`#main-navbar [data-links*="${id}"]`)),
    top = document.querySelector("#hero-area > div .contents"),
    navBar = document.querySelector(".scrolling-navbar"),
    backToTop = document.querySelector(".back-to-top"),
    navbarBrand = document.querySelector(".navbar-brand"),
    navbarToggler = document.querySelector(".navbar-toggler");

  inView(top, { threshold: 1 }, (entry) => {
    toggleClass(!entry.isIntersecting, navBar, "top-nav-collapse");
    toggleClass(!entry.isIntersecting, backToTop, "opacity-on");
    toggleClass(entry.isIntersecting, navbarBrand,"text-white");
    toggleClass(!entry.isIntersecting, navbarToggler,"opacity-on");
  });

  targets.forEach(target => {
    inView(target, { rootMargin: "50px", threshold: 0.95 }, entry => {
      const currentNav = links[entry.target.id];
      if (!currentNav) {
        return;
      }
      toggleClass(entry.isIntersecting, currentNav, "active");
    });
  });
}

const navigation = () => {
  const mainNavbar = document.querySelector('#main-navbar'),
    navbarToggler = document.querySelector(".navbar-toggler"),
    isVisible = () => navbarToggler.classList.contains("opacity-on");

  navbarToggler.addEventListener('click', () => isVisible() && toggleClass(undefined, mainNavbar, 'collapse'));
  navbarToggler.addEventListener('focusout', () => setTimeout(() => toggleClass(true, mainNavbar, 'collapse'), 50));
}

document.addEventListener("DOMContentLoaded", () => {
  backgrounds('[data-paralax]')
  navigation()
  scrollSpy()

  createApp(Serices).mount('#services')
  createApp(Features).mount('#features')
  createApp(Timeline).mount("#timeline")
  createApp(Progress).mount("#progress")
  createApp(Portfolio).mount("#portfolios")
  createApp(Pricing).mount('#pricing')
  createApp(Counters).mount('#counters')
  createApp(Team).mount('#team')
  createApp(Testimonial).mount('#testimonial')
  createApp(Blog).mount('#blog')

  const loader = document.querySelector('#loader')
  fadeOut(loader)
});
