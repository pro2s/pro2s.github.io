export const fadeOut = (el) => {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

export const fadeIn = (el, display) => {
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

export const nodeListToArray = (nodeList) => Array.prototype.slice.call(nodeList);

export const mapToAsocciatedObject = (nodeList, getter) => nodeListToArray(nodeList)
  .reduce((acc, node) => {
      if (node.id) {
        const el = getter(node.id);
        if (!el) {
          return acc;
        }

        acc[node.id] = el;
      }

      return acc;
  },{});

export const toggleClass = (flag, el, className) => el.classList.toggle(className, flag);

export const setOpacity = (selector, opacity) => document.querySelectorAll(selector).forEach(el => {
  if (opacity === 1) {
    el.hidden = false;
  }
  el.style.opacity = opacity
});


export const inView = (target, options, action) => {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => action(entry)), options);
  observer.observe(target);
};
