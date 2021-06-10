<template>
  <div class="contact-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12 contact-us">
          <h3>{{ data.contacts.title }}</h3>
          <Contacts :contact="data.contacts.contact" :socials="data.contacts.socials"/>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12 contact-block">
          <ContactForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from '../components/Contacts.vue'
import ContactForm from './ContactForm.vue'

export default {
  inject: ["data"],
  components: {
    Contacts,
    ContactForm
  }
}
</script>