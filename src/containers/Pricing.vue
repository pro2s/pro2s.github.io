<template>
  <div class="container">
    <section-header title="Pricing Table">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
      dignissimos! <br />
      Lorem ipsum dolor sit amet, consectetur.
    </section-header>
    <div class="row pricing-tables">
      <price class="col-md-4 col-sm-6 col-xs-12"
        v-for="(price, key) in prices" :key="key" v-bind="price">
      </price>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../components/SectionHeader.vue"
import Price from "../components/Price.vue"

const options = [
  "Consectetur adipiscing",
  "Nunc luctus nulla et tellus",
  "Suspendisse quis metus",
  "Vestibul varius fermentum erat",
];

export default {
  data: () => ({
    prices: [
      {
        title: "Free",
        price: "0.0",
        options,
        action: "Try Now"
      },
      {
        title: "Popular",
        price: "3.99",
        options,
        action: "Buy Now",
      },
      {
        title: "Premium",
        price: "9.50",
        options,
        action: "Buy Now",
      }
    ]
  }),
  components: {
    price: Price,
    "section-header": SectionHeader,
  },
}
</script>
