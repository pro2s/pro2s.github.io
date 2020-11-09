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

const isIntersecting = (flag, el, className) => flag
  ? el.classList.add(className)
  : el.classList.remove(className);

const scrollSpy = () => {
  const targets = document.querySelectorAll("header, .section"),
    top = document.querySelector("#hero-area > div .contents"),
    navBar = document.querySelector(".scrolling-navbar"),
    links = mapToAsocciatedObject(targets, (id) => document.querySelector(
      `#main-navbar a.nav-link[href='#${id}']`
    ));

  // check if IntersectionObserver is supported
  if ("IntersectionObserver" in window) {
    inView(top, {threshold: 1}, (entry) => {
      isIntersecting(!entry.isIntersecting, navBar, "top-nav-collapse")
    });

    targets.forEach(target => {
      inView(target, {rootMargin: "50px", threshold: 1}, entry => {
        const currentNav = links[entry.target.id];
        if (!currentNav) {
          return;
        }
        isIntersecting(entry.isIntersecting, currentNav, "active");
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById('loader');
  scrollSpy();
  fadeOut(loader);
});