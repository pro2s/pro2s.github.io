<template>
  <div>
    <div class="facts-item">
      <Icon :icon="icon" />
      <div class="fact-count" v-in-view="startCount">
        <h3>
          <span class="counter"><AnimatedNumber :target="counter" duration="1000"/></span>
        </h3>
        <h4><slot /></h4>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedNumber from "./AnimatedNumber.vue"
import Icon from "./Icon.vue";
import inView from "../directives/inView.js";

export default {
  props: ["icon", "target"],
  data: () => ({
    counter: 0,
  }),
  components: {
    Icon,
    AnimatedNumber
  },
  directives: {
    "in-view": inView,
  },
  methods: {
    startCount(viewed) {
      if (!viewed) {
        return;
      }

      this.counter = this.target;
    },
  },
};
</script>
