<template>
  <ul>
      <slot/>
  </ul>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  position: relative;
  &:before, &:after {
    content: ' ';
    background: black;
    display: inline-block;
    position: absolute;
    z-index: 400;
  }
  &:before {
    left: 29px;
    width: 2px;
    height: 100%;
  }
  &:after {
    bottom: 0px;
    left: 20px;
    width: 20px;
    height: 2px;
  }
}
</style>

