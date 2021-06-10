<template>
  <div class="container">
    <section-header :title="data.timeline.title">
      <multi-line :text="data.timeline.description"/>
    </section-header>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <timeline class="timeline">
          <timeline-point v-for="point in data.timeline.points" :key="point.date" :title="point.title" :date="point.date">
            <multi-line :text="point.text" />
          </timeline-point>
        </timeline>
      </div>
    </div>
  </div>
</template>
<script>
import SectionHeader from "../components/SectionHeader.vue";
import TimelinePoint from "../components/TimelinePoint.vue";
import Timeline from "../components/Timeline.vue";
import MultiLine from '../components/MultiLine.vue';

export default {
  inject: ["data"],
  components: {
    SectionHeader,
    TimelinePoint,
    Timeline,
    MultiLine,
  },
};
</script>

<style lang="scss">
  @import '../scss/config.scss';

  #timeline {
    .timeline {
      &:before {
        background: $green;
      }
      &:after {
        background: $green-drack;
      }

      > li {
        &:hover {
          &:before {
            background: $green;
          }
        }
        &:before {
          background: $white;
          border: 3px solid $green-drack;
        }
      }
    }
  }
</style>
