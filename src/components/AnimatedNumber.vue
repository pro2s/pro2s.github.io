<template>
    {{ animatedNumber }}
</template>

<script>
export default {
  props: ["target", "duration", "delay", "manual"],
  data: () => ({
    animationDelay: 0,
    started: undefined,
    to: 0,
    from: 0,
    counter: 0,
  }),
  computed: {
    animatedNumber: function() {
      return this.counter.toFixed(0);
    }
  },
  watch: {
    target: function (newTarget, oldTarget) {
      this.startCount(oldTarget, newTarget)
    }
  },
  mounted: function () {
    this.animationDelay = parseInt(this.delay, 10);
    if (isNaN(this.animationDelay)) {
      this.animationDelay = 0;
    }

    if (this.target) {
      this.startCount(0, this.target)
    }
  },
  methods: {
    count(timestamp) {
      if (!this.started) {
        this.started = timestamp;
      }

      const duration = timestamp - this.started

      if (duration < this.animationDelay) {
        return requestAnimationFrame(this.count);
      }

      const progress = (duration - this.animationDelay) / this.duration;
      this.counter = this.from + Math.trunc((this.to - this.from) * progress);

      if (this.counter < this.to) {
        return requestAnimationFrame(this.count);
      }

      this.from = this.to;
    },
    startCount(from, to) {
      if (this.started) {
        return
      }

      from = parseInt(from, 10);
      to = parseInt(to, 10);

      this.from = 0;

      if (!isNaN(from)) {
        this.from = from;
      }

      if (!isNaN(to)) {
        this.to = to;
        requestAnimationFrame(this.count);
      }
    },
  },
};
</script>
