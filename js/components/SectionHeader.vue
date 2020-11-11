<template>
  <div class="section-header">
    <h2 class="section-title">{{ title }}</h2>
    <hr class="lines" />
    <p class="section-subtitle">
      <slot/>
    </p>
  </div>
</template>

<script>
module.exports = {
  props: ["title"],
};
</script>
