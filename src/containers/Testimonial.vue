<template>
  <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-12">
            <gallery class="touch-slider" :options="options">
              <testimonial title="Founder of Jalmori" name="Jone Deam" :image="photos.customer1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br> adipisicing ciusmod tempor incididunt ut labore et
              </testimonial>
              <testimonial title="President Lexo Inc" name="Oidila Matik" :image="photos.customer2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br> adipisicing ciusmod tempor incididunt ut labore et
              </testimonial>
              <testimonial title="CEO Optima Inc" name="Alex Dattilo" :image="photos.customer3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br> adipisicing ciusmod tempor incididunt ut labore et
              </testimonial>
              <testimonial title="CEO & Founder" name="Paul Kowalsy" :image="photos.customer4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br> adipisicing ciusmod tempor incididunt ut labore et
              </testimonial>
            </gallery>
          </div>
        </div>
      </div>
</template>

<script>
import Gallery from '../components/Gallery.vue';
import Testimonial from '../components/Testimonial.vue';
import SectionHeader from '../components/SectionHeader.vue';

const customer1 = "/img/testimonial/customer1.jpg";
const customer2 = "/img/testimonial/customer2.jpg";
const customer3 = "/img/testimonial/customer3.jpg";
const customer4 = "/img/testimonial/customer4.jpg";

export default {
  data: () => ({
      options: { autoPlay: true, groupCells: true, wrapAround: true },
      photos: {
        customer1, customer2, customer3, customer4
      },
  }),
  components: {
    'gallery': Gallery,
    'testimonial': Testimonial,
    'section-header': SectionHeader
  }
}
</script>

<style lang="scss">
  @import "flickity/css/flickity.css";
</style>
