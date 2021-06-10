<template>
  <template v-for="(text, index) in lines" :key="index">
    {{ text }}
    <br v-if="index !== last"/>
  </template>
</template>

<script>
export default {
  data: () =>({
    lines: [],
    last: 0,
  }),
  mounted() {
    this.lines = this.text.split('\n')
    this.last = this.lines.length -1
  },
  props: ["text"],
};
</script>