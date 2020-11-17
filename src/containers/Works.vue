<template>
  <div class="container">
    <SectionHeader title="Our Portfolio">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
      dignissimos! <br />
      Lorem ipsum dolor sit amet, consectetur.
    </SectionHeader>
    <div class="row">
      <div class="col-md-12">
        <div class="controls text-center">
          <a v-for="filter in filters"
            :key="filter.id"
            :class="[{ active: isActive(filter) }, 'btn', 'btn-common']"
            @click="setFilter(filter)"
          >
            {{ filter.name }}
          </a>
        </div>
      </div>
      <div id="portfolio" class="row">
        <transition-group name="works-list">
          <Work class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix"
            v-for="work in worksList" :key="work.id" v-bind="work" :title="work.type"/>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Work from "../components/Work.vue"
import SectionHeader from "../components/SectionHeader.vue"

export default {
  data: () => ({
    filter: "*",
    filters: [
      { id: "*", name: "All" },
      { id: "development", name: "Development" },
      { id: "design", name: "Design" },
      { id: "print", name: "Print" },
    ],
    works: [
      { id: 1, type: "development print", image: "/img/portfolio/img1.jpg"},
      { id: 2, type: "design print", image: "/img/portfolio/img2.jpg" },
      { id: 3, type: "development", image: "/img/portfolio/img3.jpg" },
      { id: 4, type: "development design", image: "/img/portfolio/img4.jpg" },
      { id: 5, type: "development", image: "/img/portfolio/img5.jpg" },
      { id: 6, type: "print design", image: "/img/portfolio/img6.jpg" },
    ],
  }),
  components: {
    Work,
    SectionHeader,
  },
  methods: {
    setFilter(filter) {
      this.filter = filter.id;
    },
    isActive(filter) {
      return this.filter === filter.id;
    },
  },
  computed: {
    worksList() {
      return this.filter === "*"
        ? this.works
        : this.works.filter((w) => w.type.includes(this.filter));
    },
  },
}
</script>
