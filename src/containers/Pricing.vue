<template>
  <div class="container">
    <section-header title="Pricing Table">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
      dignissimos! <br />
      Lorem ipsum dolor sit amet, consectetur.
    </section-header>
    <div class="row pricing-tables">
      <price
        class="col-md-4 col-sm-6 col-xs-12"
        title="Free"
        price="0.0"
        :options="options"
        action="Try Now"
      ></price>
      <price
        class="col-md-4 col-sm-6 col-xs-12"
        title="Popular"
        price="3.99"
        :options="options"
        action="Buy Now"
      ></price>
      <price
        class="col-md-4 col-sm-6 col-xs-12"
        title="Premium"
        price="9.50"
        :options="options"
        action="Buy Now"
      ></price>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../components/SectionHeader.vue";
import Price from "../components/Price.vue";

export default {
  data: () => ({
    options: [
      "Consectetur adipiscing",
      "Nunc luctus nulla et tellus",
      "Suspendisse quis metus",
      "Vestibul varius fermentum erat",
    ],
  }),
  components: {
    price: Price,
    "section-header": SectionHeader,
  },
};
</script>
