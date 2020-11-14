<template>
  <div class="container">
    <section-header title="Recent Blog">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
      dignissimos! <br />
      Lorem ipsum dolor sit amet, consectetur.
    </section-header>
    <div class="row">
      <post
        class="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item"
        title="How often should you tweet?"
        :image="images.blog1"
        days="2"
        comments="24"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua...
      </post>
      <post
        class="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item"
        title="Content is still king"
        :image="images.blog2"
        days="3"
        comments="14"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua...
      </post>
      <post
        class="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item"
        title="Social media at work"
        :image="images.blog3"
        days="7"
        comments="42"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua...
      </post>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import SectionHeader from "../components/SectionHeader.vue";

const blog1 = "/img/blog/img1.jpg";
const blog2 = "/img/blog/img2.jpg";
const blog3 = "/img/blog/img3.jpg";

export default {
  data: () => ({
    images: {
      blog1,
      blog2,
      blog3,
    },
  }),
  components: {
    post: Post,
    "section-header": SectionHeader,
  },
};
</script>
