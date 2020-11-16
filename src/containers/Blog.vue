<template>
  <div class="container">
    <section-header title="Recent Blog">
      <p v-html="description"></p>
    </section-header>
    <div class="row">
      <post class="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item"
        v-for="(post, key) in posts" :key="key" v-bind="post"
      >
        {{ post.text }}
      </post>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue"
import SectionHeader from "../components/SectionHeader.vue"

const defaultText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua...`

export default {
  data: () => ({
    description: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
      dignissimos! <br />
      Lorem ipsum dolor sit amet, consectetur.
    `,
    posts: [
      {
        image: "/img/blog/img1.jpg",
        title: "How often should you tweet?",
        days: 2,
        comments: 24,
        text: defaultText,
      },
      {
        image: "/img/blog/img2.jpg",
        title: "Content is still king",
        days: 5,
        comments: 13,
        text: defaultText,
      },
      {
        image: "/img/blog/img3.jpg",
        title: "Social media at work",
        days: 7,
        comments: 42,
        text: defaultText,
      },
    ],
  }),
  components: {
    post: Post,
    "section-header": SectionHeader,
  },
}
</script>
