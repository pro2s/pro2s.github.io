<template>
  <div class="icon">
    <i :class="['lni', 'lni-' + icon]"></i>
  </div>
</template>

<script>
export default {
  props: ["icon"],
};
</script>
