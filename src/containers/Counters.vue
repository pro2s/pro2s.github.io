<template>
  <div class="container">
    <div class="row">
      <counter class="col-sm-6 col-md-3 col-lg-3" icon="timer" target="1234"
        >Working Hours</counter
      >
      <counter class="col-sm-6 col-md-3 col-lg-3" icon="briefcase" target="321"
        >Completed Projects</counter
      >
      <counter class="col-sm-6 col-md-3 col-lg-3" icon="user" target="123"
        >No. of Clients</counter
      >
      <counter class="col-sm-6 col-md-3 col-lg-3" icon="heart" target="4321"
        >Peoples Love</counter
      >
    </div>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";

export default {
  data: () => ({}),
  components: {
    counter: Counter,
  },
};
</script>
