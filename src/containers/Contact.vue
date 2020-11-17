<template>
  <div class="contact-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12 contact-us">
          <h3>Contact With Me</h3>
          <Contacts/>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12 contact-block">
          <ContactForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from './Contacts.vue'
import ContactForm from './ContactForm.vue'

export default {
  components: {
    Contacts,
    ContactForm
  }
}
</script>