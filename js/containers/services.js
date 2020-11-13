import { createApp } from 'vue';
import SectionHeader from '../components/SectionHeader';
import Service from '../components/Service';

export default createApp({
  data: () => ({}),
  components: {
    'service': Service,
    'section-header': SectionHeader,
  }
});