<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>20 YRS DESIGN</h1>

      <p class="subtxt">Gary has been a full stack developer for 2 decades and an instructor for the last 10 years.</p>
      <p class="subtxt">I've worked with LinkedIn, Lynda, Pluralsight and more.</p>
    </div>

    <div class="right-content img1">
      <button><router-link to="/portfolio/one">Browse Work</router-link></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

  .img1 {
    background: url('../assets/home.jpg');
  }

</style>