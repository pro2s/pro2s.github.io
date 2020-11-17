<template>
  <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a href="index.html" class="navbar-brand text-white"><h1>PRO2S</h1></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <i class="lni lni-menu"></i>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="main-navbar">
        <ul class="navbar-nav mr-auto w-100 justify-content-end">
          <li class="nav-item" v-for="link in links" :key="link.link" >
            <a class="nav-link page-scroll" :href="link.link" :data-links="link.links">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  inject: ['links']
}
</script>