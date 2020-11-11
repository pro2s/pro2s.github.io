import { createApp } from 'vue';
import SectionHeader from './components/SectionHeader';
import Price from './components/Price';

export default createApp({
  data: () => ({
    options: [
      'Consectetur adipiscing',
      'Nunc luctus nulla et tellus',
      'Suspendisse quis metus',
      'Vestibul varius fermentum erat',
    ]
  }),
  components: {
    'price': Price,
    'section-header': SectionHeader,
  }
});