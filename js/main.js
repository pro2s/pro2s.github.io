import { fadeOut, mapToAsocciatedObject, toggleClass, inView } from './lib.js'
import features from './containers/features.js'
import services from './containers/services.js'
import pricing from './containers/pricing.js'
import counters from './containers/counters.js'
import team from './containers/team.js'
import blog from './containers/blog.js'
import testimonial from './containers/testimonial.js'
import portfolio from './containers/portfolio.js'
import progress from './containers/progress.js'
import timeline from './containers/timeline.js'
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
  navigation();
  scrollSpy();

  features.mount('#features');
  services.mount('#services');
  pricing.mount('#pricing');
  counters.mount('#counters');
  team.mount('#team');
  blog.mount('#blog');
  testimonial.mount('#testimonial');
  portfolio.mount("#portfolios");
  progress.mount("#progress");
  timeline.mount("#timeline");

  const loader = document.querySelector('#loader');
  fadeOut(loader);
});
