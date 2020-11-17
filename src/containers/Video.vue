<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="video-promo-content text-center">
          <h2 class="zoomIn">Watch Our Intro video</h2>
          <p class="zoomIn">
            Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
            condimentum. Vestibulum congue posuere lacus, id tincidunt nisi
            porta sit amet. Suspendisse et sapien varius, pellentesque dui non,
            semper orci.
          </p>
          <a href="https://www.youtube.com/watch?v=zNtqgrKnsCU"
            class="video-popup fadeInUp" @click.prevent="showModal = true">
            <Icon icon="play" />
          </a>
          <Modal :show="showModal" @close="showModal = false" :header="false" :footer="false">
            <template v-slot:body>
              <iframe id="ytplayer" type="text/html" width="640" height="360" allow="autoplay"
                src="http://www.youtube.com/embed/zNtqgrKnsCU?autoplay=1&loop=1"
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

export default {
  components: {
    Icon,
    Modal
  },
  data: () => ({
    showModal: false
  })
}
</script>