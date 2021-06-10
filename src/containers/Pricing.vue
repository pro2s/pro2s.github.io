<template>
  <div class="container">
    <section-header :title="data.prices.title">
      <multi-line :text="data.prices.description"/>
    </section-header>
    <div class="row pricing-tables">
      <price class="col-md-4 col-sm-6 col-xs-12"
        v-for="(price, key) in data.prices.prices" :key="key" v-bind="price">
      </price>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../components/SectionHeader.vue"
import Price from "../components/Price.vue"
import MultiLine from '../components/MultiLine.vue';

const options = [
  "Consectetur adipiscing",
  "Nunc luctus nulla et tellus",
  "Suspendisse quis metus",
  "Vestibul varius fermentum erat",
];

export default {
  inject: ["data"],
  components: {
    price: Price,
    "section-header": SectionHeader,
    MultiLine,
  },
}
</script>
