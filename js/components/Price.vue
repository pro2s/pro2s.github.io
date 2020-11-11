<template>
  <div>
    <div class="pricing-table">
      <div class="pricing-details">
        <h2>{{ title }}</h2>
        <span>${{ price }}</span>
        <ul>
          <li v-for="(option, index) in options" :key="index">{{ option }}</li>
        </ul>
      </div>
      <div class="plan-button">
        <a href="#" class="btn btn-common">{{ action }}</a>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["title", "price", "options", "action"],
};
</script>