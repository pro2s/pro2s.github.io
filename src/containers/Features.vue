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
      {label: "PHP", class: "x95 green"},
      {label: "JS", class: "x95 green"},
      {label: "HTML", class: "x95"},
      {label: "CSS", class: "x80"},
      {label: "Laravel" , class: "x85 yellow"},
      {label: "Symfony", class: "x85 yellow"},
      {label: "React" , class: "x75 blue"},
      {label: "Vue", class: "x75 blue"},
      {label: "MySQL" , class: "x80 red"},
      {label: "Docker", class: "x80 red"},
    ]
  }),
  components: {
    'skill-list': SkillList,
    'main-skill': MainSkill,
    'section-header': SectionHeader,
  }
}
</script>
