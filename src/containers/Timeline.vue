<template>
  <div class="container">
    <section-header title="Our Timeline">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
      dignissimos! <br />
      Lorem ipsum dolor sit amet, consectetur.
    </section-header>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <timeline class="timeline">
          <timeline-point title="New Web Design" date="21 March, 2014">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            scelerisque diam non nisi semper, et elementum lorem ornare.
            Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales
            vehicula....
          </timeline-point>
          <timeline-point title="21 000 Job Seekers" date="4 March, 2014">
            Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis.
            Nam pellentesque felis vitae justo accumsan, sed semper nisi
            sollicitudin...
          </timeline-point>
          <timeline-point title="Awesome Employers" date="1 April, 2014">
            Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla
            odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec
            tempor nibh...
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

export default {
  data: () => ({}),
  components: {
    "section-header": SectionHeader,
    "timeline-point": TimelinePoint,
    timeline: Timeline,
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
