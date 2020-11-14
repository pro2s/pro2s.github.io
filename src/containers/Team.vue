<template>
  <div class="container">
    <section-header title="Our Team">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
      dignissimos! <br />
      Lorem ipsum dolor sit amet, consectetur.
    </section-header>
    <div class="row">
      <member
        class="col-lg-3 col-md-6 col-xs-12"
        :photo="photo.team1"
        name="Jhon Doe"
        :socials="socials"
      >
        Chief Technical Officer
      </member>
      <member
        class="col-lg-3 col-md-6 col-xs-12"
        :photo="photo.team2"
        name="Paul Kowalsy"
        :socials="socials"
      >
        CEO & Co-Founder
      </member>
      <member
        class="col-lg-3 col-md-6 col-xs-12"
        :photo="photo.team3"
        name="Emilly Williams"
        :socials="socials"
      >
        Business Manager
      </member>
      <member
        class="col-lg-3 col-md-6 col-xs-12"
        :photo="photo.team4"
        name="Patricia Green"
        :socials="socials"
      >
        Graphic Designer
      </member>
    </div>
  </div>
</template>

<script>
import Member from "../components/Member.vue";
import SectionHeader from "../components/SectionHeader.vue";

const team1 = "/img/team/team1.jpg";
const team2 = "/img/team/team2.jpg";
const team3 = "/img/team/team3.jpg";
const team4 = "/img/team/team4.jpg";

export default {
  data: () => ({
    photo: {
      team1,
      team2,
      team3,
      team4,
    },
    socials: [
      { type: "facebook", url: "" },
      { type: "twitter", url: "" },
      { type: "linkedin", url: "" },
      { type: "instagram", url: "" },
    ],
  }),
  components: {
    "member": Member,
    "section-header": SectionHeader,
  },
};
</script>
