<template>
  <div class="contact-address">
    <p>{{ contact.address }}</p>
    <p class="phone">Phone: <span>({{ contact.phone }})</span></p>
    <p class="email">E-mail: <span>({{ contact.email }})</span></p>
  </div>
  <div class="social-icons">
    <ul class="social-list">
      <li v-for="social in socials" :key="social.name" :class="social.name">
        <a href="#">
          <Icon :icon="social.name" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "./Icon.vue"

export default {
  props: ["contact", "socials"],
  components: {
    Icon,
  },
}
</script>