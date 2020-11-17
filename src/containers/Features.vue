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
              <main-skill class="col-lg-6 col-sm-6 col-xs-12 box-item" icon="rocket" title="Bootstrap 4 Based">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </main-skill>
              <main-skill class="col-lg-6 col-sm-6 col-xs-12 box-item" icon="laptop-phone" title="Fully Responsive">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </main-skill>
              <main-skill class="col-lg-6 col-sm-6 col-xs-12 box-item" icon="layers" title="Parallax Background">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </main-skill>
              <main-skill class="col-lg-6 col-sm-6 col-xs-12 box-item" icon="cog" title="Easy to Customize">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </main-skill>
          </div>
          <div class="row">
            <skill-list class="col-md-12 box-item grid-wrapper" :skills="skils"></skill-list>
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
  data: () => ({
    skils: [
      {label: "PHP", percent: 95, class: "green"},
      {label: "JS", percent: 95, class: "green"},
      {label: "HTML", percent: 95},
      {label: "CSS", percent: 80},
      {label: "Laravel" , percent: 85, class: "yellow"},
      {label: "Symfony", percent: 85, class: "yellow"},
      {label: "React" , percent: 75, class: "blue"},
      {label: "Vue", percent: 75, class: "blue"},
      {label: "MySQL" , percent: 80, class: "red"},
      {label: "Docker", percent: 80, class: "red"},
    ]
  }),
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
