<template>
  <div class="container">
    <section-header title="Our Portfolio">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
      dignissimos! <br />
      Lorem ipsum dolor sit amet, consectetur.
    </section-header>
    <div class="row">
      <div class="col-md-12">
        <div class="controls text-center">
          <a
            v-for="f in filters"
            :key="f.id"
            :class="{ active: filter == f.id }"
            class="btn btn-common"
            @click="setFilter(f.id)"
          >
            {{ f.name }}
          </a>
        </div>
      </div>
      <div id="portfolio" class="row">
        <transition-group name="works-list">
          <work
            class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix"
            v-for="work in worksList"
            :key="work.id"
            :image="work.image"
            :title="work.type"
          >
          </work>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Work from "../components/Work.vue"
import SectionHeader from "../components/SectionHeader.vue"

const img1 = "/img/portfolio/img1.jpg"
const img2 = "/img/portfolio/img2.jpg"
const img3 = "/img/portfolio/img3.jpg"
const img4 = "/img/portfolio/img4.jpg"
const img5 = "/img/portfolio/img5.jpg"
const img6 = "/img/portfolio/img6.jpg"

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
      { id: 1, type: "development print", image: img1 },
      { id: 2, type: "design print", image: img2 },
      { id: 3, type: "development", image: img3 },
      { id: 4, type: "development design", image: img4 },
      { id: 5, type: "development", image: img5 },
      { id: 6, type: "print design", image: img6 },
    ],
  }),
  components: {
    work: Work,
    "section-header": SectionHeader,
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
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
