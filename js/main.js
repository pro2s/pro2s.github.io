import { fadeOut, mapToAsocciatedObject, toggleClass, setOpacity, inView } from './lib.js'
import features from './features.js'
import services from './services.js'
import pricing from './pricing.js'
import counters from './containers/counters.js'
import backgrounds from './backgrounds.js'

const scrollSpy = () => {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const targets = document.querySelectorAll("header, .section"),
    links = mapToAsocciatedObject(targets, id => document.querySelector(`#main-navbar a.nav-link[href='#${id}']`)),
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
    inView(target, { rootMargin: "50px", threshold: 1 }, entry => {
      const currentNav = links[entry.target.id];
      if (!currentNav) {
        return;
      }
      toggleClass(entry.isIntersecting, currentNav, "active");
    });
  });
}

const potfolio = () => {
  const filters = document.querySelectorAll('#portfolios a.filter');
  const all = "#portfolio > div";

  document.querySelectorAll(all).forEach(c => c.addEventListener("transitionend", (event) => {
    if (event.target.style.opacity === "0") {
      event.target.hidden = true;
    }
  }));

  filters.forEach(f => f.addEventListener('click', event => {
    const filterValue = event.target.getAttribute('data-filter');
    filters.forEach(f => toggleClass(f.getAttribute('data-filter') === filterValue, f, 'active'));
    if (filterValue === '*') {
      return setOpacity(all, 1);
    }
    setOpacity(all + filterValue, 1);
    setOpacity(all + `:not(${filterValue})`, 0);
  }));
}

const gallery = () => {
  const gallery = new Flickity('.gallery', { autoPlay: true, groupCells: true, wrapAround: true });
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
  gallery();
  potfolio();
  scrollSpy();

  features.mount('#features');
  services.mount('#services');
  pricing.mount('#pricing');
  counters.mount('#counters');

  const loader = document.querySelector('#loader');
  fadeOut(loader);
});
