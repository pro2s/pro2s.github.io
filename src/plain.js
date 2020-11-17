import { fadeOut, mapToAsocciatedObject, toggleClass, inView } from './lib.js'
import backgrounds from './backgrounds.js'

const scrollSpy = () => {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const targets = document.querySelectorAll("header, .section"),
    links = mapToAsocciatedObject(targets, id => document.querySelector(`#main-navbar [data-links*="${id}"]`)),
    top = document.querySelector("#about > div .contents"),
    navBar = document.querySelector(".scrolling-navbar"),
    backToTop = document.querySelector(".back-to-top"),
    navbarBrand = document.querySelector(".navbar-brand"),
    navbarToggler = document.querySelector(".navbar-toggler");

  inView(top, { threshold: 1 }, (entry) => {
    toggleClass(!entry.isIntersecting, navBar, "top-nav-collapse");
    toggleClass(!entry.isIntersecting, backToTop, "opacity-on");
    toggleClass(entry.isIntersecting, navbarBrand,"text-white");
    toggleClass(entry.isIntersecting, navbarBrand,"text-white");
    toggleClass(!entry.isIntersecting, navbarToggler,"opacity-on");
  });

  const targetsIntersect = {}
  for(const id in links) {
    targetsIntersect[id] = 0;
  }

  targets.forEach(target => {
    inView(target, { rootMargin: "55px", threshold: 0.35 }, entry => {
      if (!links[entry.target.id]) {
        return;
      }

      targetsIntersect[entry.target.id] = entry.intersectionRatio

      let enableId = null;
      let maxIntersect = 0;

      for (const id in targetsIntersect) {
        if (maxIntersect <= targetsIntersect[id]) {
            maxIntersect = targetsIntersect[id]
            enableId = id
        }

        toggleClass(false, links[id], "active")
      }

      enableId !== null && toggleClass(true, links[enableId], "active")
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

export default () => document.addEventListener("DOMContentLoaded", () => {
  backgrounds('[data-paralax]')
  navigation()
  scrollSpy()
  const loader = document.querySelector('#loader')
  fadeOut(loader)
});

