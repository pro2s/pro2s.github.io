<template>
  <figure class="animate circle">
    <svg role="img" xmlns="http://www.w3.org/2000/svg">
      <title>{{ label }}</title>
      <circle class="circle-background" cx="50%" cy="50%" :r="(size-stroke)/2"
        :stroke-width="stroke"/>
      <circle class="circle-foreground" cx="50%" cy="50%" :r="(size-stroke)/2"
        :stroke-width="stroke"
        :stroke-dasharray="`${offset} ${len}`"
        :stroke-dashoffset="offset"
      />
      <text text-anchor="middle" x="50%" y="75%">{{ label }}</text>
    </svg>
    <figcaption>{{ percent }}%</figcaption>
  </figure>
</template>

<script>
export default {
  props: ["label", "size", "stroke", "percent"],
  computed: {
    len() {
      return (this.size - this.stroke) * Math.PI
    },
    offset() {
      return this.percent / 100 * this.len
    }
  }
};
</script>
