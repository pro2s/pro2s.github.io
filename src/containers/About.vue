<template>
  <div class="row justify-content-md-center">
    <div class="col-md-10">
      <div class="contents text-center">
        <h1 class="wow fadeInDown">{{ data.name }}</h1>
        <p class="lead wow fadeIn">
          {{ data.description }}
        </p>
        <a href="#" class="btn btn-common wow fadeInUp">Download CV</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["data"],
};
</script>