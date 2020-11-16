<template>
  <div class="container">
    <div class="row">
      <Counter class="col-sm-6 col-md-3 col-lg-3"
        v-for="(counter, key) in counters" :key="key" v-bind="counter">
        {{ counter.text }}
      </Counter>
    </div>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue"

export default {
  data: () => ({
    counters: [
      {icon: "timer", target: 1234, text: "Working Hours"},
      {icon: "briefcase", target: 321, text: "Completed Projects"},
      {icon: "user", target: 123, text: "No. of Clients"},
      {icon: "heart", target: 4321, text: "Peoples Love"},
    ]
  }),
  components: {
    Counter,
  },
}
</script>
