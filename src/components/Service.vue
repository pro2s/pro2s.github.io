<template>
  <div>
    <div class="item-boxes wow fadeInDown">
      <Icon :icon="icon"/>
      <h4>{{ title }}</h4>
      <p><slot/></p>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue"

export default {
  props: ["title", "icon"],
  components: {
    Icon,
  }
};
</script>
