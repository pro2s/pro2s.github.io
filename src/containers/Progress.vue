<template>
  <div class="container">
    <section-header title="Languages"></section-header>
    <div class="row">
      <line-progress
        class="col-md-4 col-sm-6"
        levels="5"
        passed="3"
        :labels="['A1', 'A2', 'B1', 'B2', 'C']"
      >
        English
      </line-progress>
      <line-progress class="col-md-4 col-sm-6" levels="5" passed="5">
        Russian
      </line-progress>
      <line-progress class="col-md-4 col-sm-6" levels="5" passed="2">
        German
      </line-progress>
      <line-progress class="col-md-4 col-sm-6" levels="5" passed="1">
        Polish
      </line-progress>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../components/SectionHeader.vue"
import LineProgress from "../components/LineProgress.vue"

export default {
  data: () => ({}),
  components: {
    "section-header": SectionHeader,
    "line-progress": LineProgress,
  },
}
</script>

<style lang="scss">
@import '../scss/config.scss';

#progress {
  .section-title {
    color: #fff;
  }

  h4 {
    color: $white;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 22px;
  }

  ul.line-progress {

    > li {
      color: $green;

      &:hover {
        &:before {
          background: $green-drack !important;
        }
      }

      &.pass:before {
        background-color: $green;
      }

      &:before {
        background: $white;
        border: 3px solid $green-drack;
      }
    }

    &:before {
      background: $green;
    }
  }
}
</style>
