<template>
  <div @touchstart="touchStart" @touchmove="touchMove">
    <div class="left" @click="prev">
      <Icon icon="chevron-left" />
    </div>
    <transition-group name="carousel-transition" :class="['gallery', direction]" tag="div">
      <template v-for="slide in slides.slice(0, this.count + 2)" :key="slide.props.name">
        <component class="slide" :is="slide"/>
      </template>
    </transition-group>
    <div class="right" @click="next">
      <Icon icon="chevron-right" />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue"

export default {
  props: ["options"],
  beforeMount(){
    for (const node of this.$slots.default()) {
      this.slides.push(node)
    }

    this.prev();
  },
  components: {
    Icon,
  },
  data: () => ({
      slides: [],
      count: 2,
      direction: '',
      disabled: false,
      x: null,
  }),
  methods: {
    touchStart(e) {
      const [firstTouch,] = e.touches;
      this.x = firstTouch.clientX;
    },
    touchMove(e) {
        if (this.x === null) {
          return;
        }

        const [firstTouch,] = e.touches;
        const diff = this.x - firstTouch.clientX;

        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }

        this.x = null;
    },
    next() {
      if (this.disabled) {
        return;
      }
      const firstSlide = this.slides.shift();
      this.slides = this.slides.concat(firstSlide);
      this.direction = 'next';
    },
    prev() {
      if (this.disabled) {
        return;
      }
      const lastSlide = this.slides.pop();
      this.slides = [lastSlide].concat(this.slides);
      this.direction = 'prev';
    }
  }
}
</script>

<style lang="scss">
  .slide {
    flex: 1 0 25%;
  }
  .next {
    .slide:last-of-type {
      opacity: 0;
    }
  }
  .prev {
    .slide:first-of-type {
      opacity: 0;
    }
  }

  .carousel-transition-move {
    transition: transform 1s;
  }
</style>

<style lang="scss" scoped>
  .left, .right {
    height: 34px;
    line-height: 34px;
    text-align: center;
    width: 34px;
    color: #61d2b4;
    font-size: 14px;
    background: #fff;
    border-radius: 50px;
    cursor: pointer;
    opacity: 0.5;
    z-index: 5;
  }
  .left {
    position: absolute;
    left: 0;
    top: 50%;
  }
  .right {
    position: absolute;
    right: 0;
    top: 50%;
  }

  .gallery {
    width: 200%;
    transform: translateX(-25%);
    display: flex;
    overflow: hidden;
  }
</style>
