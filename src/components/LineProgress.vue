<template>
  <div>
    <h4><slot /></h4>
    <ul class="line-progress">
      <li
        v-for="level in levelsList"
        :key="level.id"
        :class="{ pass: level.passed }"
      >
        {{ level.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["title", "levels", "passed", "labels"],
  computed: {
    levelsList() {
      const labels = this.labels || [];
      const length = { length: this.levels || labels.length };
      return Array.from(length, (_, id) => ({
        id,
        label: labels[id] || "",
        passed: id + 1 <= this.passed,
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
ul.line-progress {
  justify-content: space-between;
  display: flex;
  list-style-type: none;
  position: relative;
  margin-bottom: 1em;

  > li {
    color: white;
    padding-left: 5px;
    padding-top: 20px;
    line-height: 22px;
    display: inline-block;
    min-width: 20px;

    &:before {
      transition: all 0.2s linear;
      content: " ";
      background: white;
      position: absolute;
      border-radius: 50%;
      border: 3px solid black;
      top: 0px;
      margin-left: -5px;
      width: 20px;
      height: 20px;
      z-index: 400;
    }
  }

  &:before {
    content: " ";
    background: white;
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: 2px;
    z-index: 400;
  }
}
</style>

