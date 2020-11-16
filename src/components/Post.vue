<template>
  <div>
    <div class="blog-item-wrapper">
      <div class="blog-item-img">
        <a href="#">
          <img :src="image" :alt="title"/>
        </a>
      </div>
      <div class="blog-item-text">
        <div class="meta-tags">
          <span class="date"><i class="lni lni-timer"></i>{{ days }} Days Ago</span>
          <span class="comments">
            <a href="#"><i class="lni lni-bubble"></i>{{ comments }} Comments</a></span>
        </div>
        <h3>
          <a href="#">{{ title }}</a>
        </h3>
        <p>
          <slot/>
        </p>
        <a href="#" class="btn-rm">Read More <i class="lni lni-arrow-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "image", "days", "comments"],
};
</script>
