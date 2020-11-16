<template>
  <div>
    <slot/>
  </div>
</template>

<script>
import Flickity from "flickity"

export default {
  props: ["options"],
  mounted() {
    this.init();
  },
  beforeUnmount() {
    this.flickity.destroy()
    this.flickity = null
  },
  methods: {
    init() {
      this.flickity = new Flickity(this.$el, this.options);
      this.$emit('init', this.flickity);
    },
  }
}
</script>
