<template>
  <figure class="animate circle" :style="[animation, sizes]">
    <svg role="img" xmlns="http://www.w3.org/2000/svg">
      <title>{{ label }}</title>
      <circle class="circle-background" cx="50%" cy="50%" :r="radius"
        :stroke-width="stroke"/>
      <circle class="circle-foreground" cx="50%" cy="50%" :r="radius"
        :stroke-width="stroke"
        :stroke-dasharray="`${offset} ${len}`"
        :stroke-dashoffset="offset"
      />
      <text text-anchor="middle" x="50%" y="75%">{{ label }}</text>
    </svg>
    <figcaption><AnimatedNumber :target="percent" :delay="delay * 1000" :duration="duration * 1000"/>%</figcaption>
  </figure>
</template>

<script>
import AnimatedNumber from "./AnimatedNumber.vue"

export default {
  props: ["label", "size", "stroke", "percent", "delay", "duration"],
  components: {
    AnimatedNumber
  },
  computed: {
    sizes() {
      const size = this.size + 'px';
      return {
        width: size,
        height: size,
      }
    },
    animation() {
      const style = {};

      if (this.delay) {
        style['--delay'] = this.delay + 's';
      }

      if (this.duration) {
        style['--duration'] = this.duration + 's';
      }

      return style;
    },
    radius() {
      return (this.size - this.stroke)/2
    },
    len() {
      return (this.size - this.stroke) * Math.PI
    },
    offset() {
      return this.percent / 100 * this.len
    }
  }
};
</script>
