import { createApp } from 'vue';
import SectionHeader from '../components/SectionHeader';
import TimelinePoint from '../components/TimelinePoint';
import Timeline from '../components/Timeline';

export default createApp({
  data: () => ({
  }),
  components: {
    'section-header': SectionHeader,
    'timeline-point': TimelinePoint,
    'timeline': Timeline,
  }
});