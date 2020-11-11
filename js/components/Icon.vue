<template>
  <div class="icon">
    <i :class="['lni', 'lni-' + icon]"></i>
  </div>
</template>

<script>
module.exports = {
  props: ["icon"],
};
</script>