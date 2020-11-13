import { createApp } from 'vue';
import Gallery from '../components/Gallery';
import Testimonial from '../components/Testimonial';
import SectionHeader from '../components/SectionHeader';
import customer1 from "url:/img/testimonial/customer1.jpg";
import customer2 from "url:/img/testimonial/customer2.jpg";
import customer3 from "url:/img/testimonial/customer3.jpg";
import customer4 from "url:/img/testimonial/customer4.jpg";

export default createApp({
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
});