import { createApp } from 'vue';
import SkillList from '../components/SkillList';
import MainSkill from '../components/MainSkill';
import SectionHeader from '../components/SectionHeader';

export default createApp({
  data: () => ({
    skils: [
      {label: "PHP", class: "x95 green"},
      {label: "JS", class: "x95 green"},
      {label: "HTML", class: "x95"},
      {label: "CSS", class: "x80"},
      {label: "Laravel" , class: "x85 yellow"},
      {label: "Symfony", class: "x85 yellow"},
      {label: "React" , class: "x75 blue"},
      {label: "Vue", class: "x75 blue"},
      {label: "MySQL" , class: "x80 red"},
      {label: "Docker", class: "x80 red"},
    ]
  }),
  components: {
    'skill-list': SkillList,
    'main-skill': MainSkill,
    'section-header': SectionHeader,
  }
});