<template>
  <div class="container">
    <SectionHeader :title="data.works.title">
      <multi-line :text="data.works.description" />
    </SectionHeader>
    <div class="row">
      <div class="col-md-12">
        <div class="controls text-center">
          <a v-for="filter in data.works.filters"
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
import MultiLine from '../components/MultiLine.vue';

export default {
  inject: ["data"],
  data: () => ({
    filter: "*",
  }),
  components: {
    Work,
    SectionHeader,
    MultiLine,
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
        ? this.data.works.works
        : this.data.works.works.filter((w) => w.type.includes(this.filter));
    },
  },
}
</script>
