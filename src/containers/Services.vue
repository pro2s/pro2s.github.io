<template>
  <div class="container">
    <section-header :title="data.services.title">
      {{ data.services.description }}
    </section-header>
    <div class="row">
      <service class="col-md-4 col-sm-6"
        v-for="item in data.services.items"
        :key="item.icon"
        :icon="item.icon"
        :title="item.title">
        {{ item.description }}
      </service>
    </div>
  </div>
</template>
<script>
import SectionHeader from '../components/SectionHeader.vue';
import Service from '../components/Service.vue';

export default {
  inject: ["data"],
  mounted() {

  },
  components: {
    'service': Service,
    'section-header': SectionHeader,
  }
}
</script>
