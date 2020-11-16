<template>
  <figure class="animate circle">
    <svg role="img" xmlns="http://www.w3.org/2000/svg">
      <title>{{ label }}</title>
      <circle class="circle-background"/>
      <circle class="circle-foreground"/>
      <text text-anchor="middle" x="50%" y="75%">{{ label }}</text>
    </svg>
    <figcaption></figcaption>
  </figure>
</template>

<script>
export default {
  props: ['label'],
};
</script>
