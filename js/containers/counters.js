import { createApp } from 'vue';
import Counter from '../components/Counter';

export default createApp({
  data: () => ({}),
  components: {
    'counter': Counter,
  }
});