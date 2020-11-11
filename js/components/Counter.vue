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
import Icon from "./Icon";
import inView from "../directives/inView.js";

module.exports = {
  props: ["icon", "target"],
  data: () => ({
    duration: 1000,
    started: false,
    step: null,
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
      if (this.step === null && this.started !== false) {
        this.step = Math.trunc(
          +this.target / (this.duration / (timestamp - this.started))
        );
      }

      if (timestamp && this.started === false) {
        this.started = timestamp;
      }

      this.counter += this.step || 1;

      if (this.counter < this.target) {
        requestAnimationFrame(this.count);
      } else {
        this.counter = this.target;
      }
    },
    startCount(viewed) {
      if (viewed && this.started === false) {
        const to = parseInt(this.target, 10);

        if (isNaN(to)) return;

        this.count();
      }
    },
  },
};
</script>