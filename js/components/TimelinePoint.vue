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
module.exports = {
  props: ["title", "date"],
};
</script>
