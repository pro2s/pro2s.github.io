import { createApp } from 'vue';
import Post from '../components/Post';
import SectionHeader from '../components/SectionHeader';
import blog1 from "url:/img/blog/img1.jpg";
import blog2 from "url:/img/blog/img2.jpg";
import blog3 from "url:/img/blog/img3.jpg";

export default createApp({
  data: () => ({
      images: {
        blog1, blog2, blog3
      },
  }),
  components: {
    'post': Post,
    'section-header': SectionHeader
  }
});