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
import Icon from "../components/Icon.vue"

export default {
  components: {
    Icon,
  },
  props: ["title"],
  data: () => ({
    contact: {
      address: "Centerville Road, DE 19808, US",
      phone: "+1 234 567 890",
      email: "mail@pro2s.ru",
    },
    socials: [
      {name: "facebook"},
      {name: "twitter"},
      {name: "linkedin"},
      {name: "instagram"},
    ]
  })
}
</script>