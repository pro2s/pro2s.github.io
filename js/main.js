const fadeOut = (el) => {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};

const countTo = (el, duration = 10000) => {
  el.started = true;

  let start = null, step = null;
  const to = parseInt(el.textContent, 10);
  if (isNaN(to)) return;

  el.textContent = 0;

  (function count(timestamp) {
    if (start) step = Math.trunc(to / (duration / (timestamp - start)));
    if (!start) start = timestamp;
    el.textContent = +el.textContent + (step || 1);

    if (el.textContent < to) {
      requestAnimationFrame(count);
    } else {
      el.textContent = to;
    }
  })();
};


const inView = (target, options, action) => {
  const interSecObs = new IntersectionObserver(entries => {
   entries.forEach(entry => {
     action(entry);
   });
  }, options);
  interSecObs.observe(target);
};

const nodeListToArray = (nodeList) => Array.prototype.slice.call(nodeList);
const mapToAsocciatedObject = (nodeList, getter) => nodeListToArray(nodeList)
  .reduce(
    (acc, node) => {
      if (node.id) {
        const el = getter(node.id);
        if (!el) {
          return acc;
        }

        acc[node.id] = el;
      }

      return acc;
    },
    {}
  );

const toggleClass = (flag, el, className) => flag
  ? el.classList.add(className)
  : el.classList.remove(className);

const scrollSpy = () => {
  const targets = document.querySelectorAll("header, .section"),
    top = document.querySelector("#hero-area > div .contents"),
    navBar = document.querySelector(".scrolling-navbar"),
    backToTop = document.querySelector(".back-to-top"),
    links = mapToAsocciatedObject(targets, (id) => document.querySelector(
      `#main-navbar a.nav-link[href='#${id}']`
    ));

  // check if IntersectionObserver is supported
  if ("IntersectionObserver" in window) {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(c => inView(c, {threshold: 1}, entry => {
      entry.isIntersecting && !entry.target.started && countTo(entry.target);
    }));

    inView(top, {threshold: 1}, (entry) => {
      toggleClass(!entry.isIntersecting, navBar, "top-nav-collapse")
      toggleClass(!entry.isIntersecting, backToTop, "opacity-on")
    });

    targets.forEach(target => {
      inView(target, {rootMargin: "50px", threshold: 1}, entry => {
        const currentNav = links[entry.target.id];
        if (!currentNav) {
          return;
        }
        toggleClass(entry.isIntersecting, currentNav, "active");
      });
    });
  }
}

const setOpacity = (selector, opacity) => document.querySelectorAll(selector).forEach(el => {
  if (opacity === 1) {
    el.hidden = false;
  }
  el.style.opacity = opacity
});

const potfolio = () => {
  const filters = document.querySelectorAll('#portfolios a.filter');
  const all = "#portfolio > div";

  document.querySelectorAll(all).forEach(c => c.addEventListener("transitionend",(event) => {
    if (event.target.style.opacity === "0") {
      event.target.hidden = true;
    }
  }));

  filters.forEach(f => f.addEventListener('click', function(event) {
    const filterValue = event.target.getAttribute('data-filter');
    filters.forEach(f => toggleClass(f.getAttribute('data-filter') === filterValue, f,'active'))
    if (filterValue === '*') {
      return setOpacity(all, 1);
    }
    setOpacity(all + filterValue, 1);
    setOpacity(all + `:not(${filterValue})`, 0);
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector('#loader');
  potfolio();
  const gallery = new Flickity('.gallery', {autoPlay:true, groupCells: true, wrapAround: true});
  scrollSpy();
  fadeOut(loader);
});

const app = Vue.createApp({});