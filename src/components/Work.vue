<template>
  <div>
  <div class="portfolio-item">
    <div class="shot-item">
      <img :src="image" :alt="title"/>
      <a class="overlay lightbox" :href="image" @click.prevent="showModal=true">
        <Icon icon="eye" class="item-icon"/>
      </a>
    </div>
  </div>
  <Modal :show="showModal" @close="showModal = false" :header="false" :footer="false">
    <template v-slot:body>
      <img class="modal-img" :src="image" :alt="title"/>
    </template>
  </Modal>
  </div>
</template>

<script>
import Icon from "./Icon.vue"
import Modal from "./Modal.vue"

export default {
  props: ["title", "icon", "image"],
  data: () => ({
    showModal: false
  }),
  components: {
    Icon,
    Modal
  },
};
</script>

<style scoped>
.modal-img {
  width: 100%;
}
</style>
