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
    this.$nextTick(() => this.init());
  },
  beforeUnmount() {
    this.flickity.destroy()
    this.flickity = null
  },
  methods: {
    init() {
      this.flickity = new Flickity(this.$el, this.options);
    },
  }
}
</script>
