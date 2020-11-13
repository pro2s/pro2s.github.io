import { createApp } from 'vue';
import Work from '../components/Work';
import SectionHeader from '../components/SectionHeader';
import img1 from "url:/img/portfolio/img1.jpg";
import img2 from "url:/img/portfolio/img2.jpg";
import img3 from "url:/img/portfolio/img3.jpg";
import img4 from "url:/img/portfolio/img4.jpg";
import img5 from "url:/img/portfolio/img5.jpg";
import img6 from "url:/img/portfolio/img6.jpg";

export default createApp({
  data: () => ({
      filter: "*",
      filters: [
        {id:"*", name: "All"},
        {id:"development", name: "Development"},
        {id:"design", name: "Design"},
        {id:"print", name: "Print"},
      ],
      works: [
        {id: 1,type: "development print", image: img1},
        {id: 2,type: "design print", image: img2},
        {id: 3,type: "development", image: img3},
        {id: 4,type: "development design", image: img4},
        {id: 5,type: "development", image: img5},
        {id: 6,type: "print design", image: img6},
      ]
  }),
  components: {
    'work': Work,
    'section-header': SectionHeader
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
    }
  },
  computed: {
    worksList() {
      return this.filter === "*"
        ? this.works
        : this.works.filter(w => w.type.includes(this.filter));
    }
  },
});