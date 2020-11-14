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
export default {
  props: ["image", "name", "title"],
};
</script>
