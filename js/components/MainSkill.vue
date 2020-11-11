<template>
  <div>
    <span class="icon">
      <i :class="['lni', 'lni-' + icon]"></i>
    </span>
    <div class="text">
      <h4>{{ title }}</h4>
      <p><slot/></p>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["title", "icon", "description"],
};
</script>
