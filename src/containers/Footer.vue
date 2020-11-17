<template>
  <div class="container">
    <div class="row">
      <!-- Footer Links -->
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <ul class="footer-links">
          <li v-for="link in links.filter(l => l.footer)" :key="link.link">
            <a :href="link.link">{{ link.name }}</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <div class="copyright">
          <p>
            Designed by <a rel="nofollow" href="https://uideck.com">UIdeck</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["links"],
};
</script>