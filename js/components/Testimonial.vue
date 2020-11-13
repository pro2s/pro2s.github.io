<template>
  <div class="testimonial-item">
    <img :src="image" :alt="name" />
    <div class="testimonial-text">
      <p>
        <slot/>
      </p>
      <h3>{{ name }}</h3>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["image", "name", "title"],
};
</script>