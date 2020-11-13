import { createApp } from 'vue';
import SectionHeader from '../components/SectionHeader';
import LineProgress from '../components/LineProgress';

export default createApp({
  data: () => ({
  }),
  components: {
    'section-header': SectionHeader,
    'line-progress': LineProgress,
  }
});