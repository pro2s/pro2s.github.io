<template>
  <div class="container">
    <section-header :title="data.progress.title"></section-header>
    <div class="row">
      <line-progress class="col-md-4 col-sm-6"
        v-for="item in data.progress.items" :key="item.text"
        :levels="item.levels"
        :passed="item.passed"
        :labels="item.labels || []"
      >
        {{ item.text }}
      </line-progress>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../components/SectionHeader.vue"
import LineProgress from "../components/LineProgress.vue"

export default {
  inject: ["data"],
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
