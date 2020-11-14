export default {
    mounted(el, binding) {
      el._observer = new IntersectionObserver(
        entries => {
          const e = entries.find(e => e.target === el) || { };
          binding.value(e.isIntersecting || false)
        },
        { threshold: 1 }
      );
      el._observer.observe(el);
    },

    unmounted(el) {
      el._observer && el._observer.disconnect();
    }
}