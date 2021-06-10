<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="video-promo-content text-center">
          <h2 class="zoomIn">{{ data.video.title }}</h2>
          <p class="zoomIn">
            <multi-line :text="data.video.description" />
          </p>
          <a :href="data.video.url"
            class="video-popup fadeInUp" @click.prevent="showModal = true">
            <Icon icon="play" />
          </a>
          <Modal :show="showModal" @close="showModal = false" :header="false" :footer="false">
            <template v-slot:body>
              <iframe id="ytplayer" type="text/html" width="640" height="360" allow="autoplay"
                :src="data.video.src + '?autoplay=1&loop=1'"
                frameborder="0"/>
            </template>
          </Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../components/Icon.vue"
import Modal from "../components/Modal.vue"
import MultiLine from '../components/MultiLine.vue'

export default {
  inject: ["data"],
  components: {
    Icon,
    Modal,
    MultiLine
  },
  data: () => ({
    showModal: false
  })
}
</script>