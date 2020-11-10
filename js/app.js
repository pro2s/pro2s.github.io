import { createApp } from 'vue';
import SkillCircle from './components/SkillCircle';

export const app = createApp({
  components: {
    'skill-circle': SkillCircle,
  }
});
