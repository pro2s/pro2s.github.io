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
  &:before {
    content: ' ';
    background: black;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
  }
  &:after {
    content: ' ';
    background: black;
    display: inline-block;
    position: absolute;
    bottom: 0px;
    left: 20px;
    width: 20px;
    height: 2px;
    z-index: 400;
  }

  > li {
    &:hover {
      &:before {
        background: black;
      }
    }
    margin: 20px 0;
    padding-left: 60px;
    &:before {
      transition: all 0.2s linear;
      content: ' ';
      background: white;
      display: inline-block;
      position: absolute;
      border-radius: 50%;
      border: 3px solid black;
      left: 20px;
      width: 20px;
      height: 20px;
      z-index: 400;
    }
  }
}
</style>

