<template>
  <div class="container">
    <section-header title="Our Services">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! <br> Lorem ipsum dolor sit amet, consectetur.
    </section-header>
    <div class="row">
      <service class="col-md-4 col-sm-6" title="Content Writing" icon="pencil">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
      </service>
      <service class="col-md-4 col-sm-6" title="Web Development" icon="code">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
      </service>
      <service class="col-md-4 col-sm-6" title="Business Consultancy" icon="consulting">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
      </service>
    </div>
  </div>
</template>
<script>
import SectionHeader from '../components/SectionHeader.vue';
import Service from '../components/Service.vue';

export default {
  data: () => ({}),
  components: {
    'service': Service,
    'section-header': SectionHeader,
  }
}
</script>
