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
