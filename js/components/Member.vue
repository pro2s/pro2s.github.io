<template>
  <div>
    <div class="single-team">
      <img :src="photo" :alt="name" />
      <div class="team-details">
        <div class="team-inner">
          <h4 class="team-title">{{ name }}</h4>
          <p><slot/></p>
          <ul class="social-list">
            <li v-for="social in socials" :key="social.type" :class="social.type">
              <a href="#"><Icon :icon="social.type" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

module.exports = {
  props: ["name", "photo", "socials"],
  components: {
    Icon,
  },
};
</script>