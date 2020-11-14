<template>
  <div>
    <div class="facts-item">
      <Icon :icon="icon" />
      <div class="fact-count" v-in-view="startCount">
        <h3>
          <span class="counter">{{ counter }}</span>
        </h3>
        <h4><slot /></h4>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import inView from "../directives/inView.js";

export default {
  props: ["icon", "target"],
  data: () => ({
    duration: 1000,
    started: undefined,
    counter: 0,
  }),
  components: {
    Icon,
  },
  directives: {
    "in-view": inView,
  },
  methods: {
    count(timestamp) {
      if (!this.started) {
        this.started = timestamp;
      }

      const progress = (timestamp - this.started) / this.duration;
      this.counter = Math.trunc(this.target * progress);

      if (this.counter < this.target) {
        requestAnimationFrame(this.count);
      } else {
        this.counter = this.target;
      }
    },
    startCount(viewed) {
      if (!viewed || this.started) {
        return;
      }

      const to = parseInt(this.target, 10);
      if (!isNaN(to)) {
        requestAnimationFrame(this.count);
      }
    },
  },
};
</script>
