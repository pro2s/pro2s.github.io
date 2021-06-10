<template>
  <div class="container">
    <div class="row">
      <Counter class="col-sm-6 col-md-3 col-lg-3"
        v-for="(counter, key) in data.counters" :key="key" v-bind="counter">
        {{ counter.text }}
      </Counter>
    </div>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue"

export default {
  inject: ["data"],
  components: {
    Counter,
  },
}
</script>
