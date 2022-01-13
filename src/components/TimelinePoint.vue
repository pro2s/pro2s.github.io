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

<style lang="scss" scoped>
li {
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
</style>