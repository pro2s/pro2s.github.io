<template>
  <div class="container">
    <section-header title="Some Features">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!<br>
      Lorem ipsum dolor sit amet, consectetur.
    </section-header>
    <div class="row">
      <div class="col-lg-8 col-md-12 col-xs-12">
        <div class="container">
          <div class="row">
              <main-skill class="col-lg-6 col-sm-6 col-xs-12 box-item"
                v-for="item in data.features.items"
                :key="item.icon"
                :icon="item.icon"
                :title="item.title">
                {{ item.description }}
              </main-skill>
          </div>
          <div class="row">
            <skill-list class="col-md-12 box-item grid-wrapper" :skills="data.features.skils"></skill-list>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-xs-12">
        <div class="show-box">
          <img class="img-fulid" src="/img/features/feature.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillList from '../components/SkillList.vue';
import MainSkill from '../components/MainSkill.vue';
import SectionHeader from '../components/SectionHeader.vue';

export default {
  inject: ["data"],
  components: {
    'skill-list': SkillList,
    'main-skill': MainSkill,
    'section-header': SectionHeader,
  }
}
</script>

<style lang="scss">
  @import "../scss/charts.scss";

  @include circle-color("green", #33b391, #61d2b4, #33b391);
  @include circle-color("yellow", #b3a633, #d2d061, #b1b333);
  @include circle-color("red", #e7a7a7, #b14c4c, #b33333);
  @include circle-color("blue",  #a19ff1, #6c61d2, #4b40e2);
  @include circle-hover(#fff, #fff, gray);
</style>
