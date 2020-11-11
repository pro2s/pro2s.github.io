import { createApp } from 'vue';
import SkillList from './components/SkillList';
import MainSkill from './components/MainSkill';
import SectionHeader from './components/SectionHeader';

export default createApp({
  data: () => ({
    skils: [
      {label: "PHP", class: "x95"},
      {label: "JS", class: "x95"},
      {label: "HTML", class: "x95"},
      {label: "CSS", class: "x80"},
      {label: "React" , class: "x75"},
      {label: "Vue", class: "x75"},
      {label: "MySQL" , class: "x80"},
      {label: "Docker", class: "x80"},
    ]
  }),
  components: {
    'skill-list': SkillList,
    'main-skill': MainSkill,
    'section-header': SectionHeader,
  }
});