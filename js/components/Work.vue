<template>
  <div>
    <div class="portfolio-item">
      <div class="shot-item">
        <img :src="image" :alt="title"/>
        <a class="overlay lightbox" :href="image">
          <Icon icon="eye" class="item-icon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

module.exports = {
  props: ["title", "icon", "image"],
  components: {
    Icon,
  },
};
</script>