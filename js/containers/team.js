import { createApp } from 'vue';
import Member from '../components/Member';
import SectionHeader from '../components/SectionHeader';
import team1 from "url:/img/team/team1.jpg";
import team2 from "url:/img/team/team2.jpg";
import team3 from "url:/img/team/team3.jpg";
import team4 from "url:/img/team/team4.jpg";

export default createApp({
  data: () => ({
      photo: {
        team1, team2, team3, team4
      },
      socials: [
          {type: 'facebook', url: ''},
          {type: 'twitter', url: ''},
          {type: 'linkedin', url: ''},
          {type: 'instagram', url: ''},
      ]
  }),
  components: {
    'member': Member,
    'section-header': SectionHeader
  }
});