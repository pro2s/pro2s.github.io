<template>
  <li>
    <a href="#">{{ title }}</a>
    <a href="#" class="float-right">{{ date }}</a>
    <p>
      <slot/>
    </p>
  </li>
</template>

<script>
export default {
  props: ["title", "date"],
};
</script>
