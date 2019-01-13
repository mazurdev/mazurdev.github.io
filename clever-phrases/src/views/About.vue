<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About me</h1>
      <p class="subtxt">I design, code, and teach a bunch of other people to do the same.</p>

      <button><router-link to="/portfolio/one">Look at my work</router-link></button>
    </div>
    <div class="right-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio amet id recusandae, minima voluptates quo fugit beatae nihil vitae, natus alias debitis placeat. Veniam consequatur autem ullam error adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio amet id recusandae, minima</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio amet id recusandae, minima voluptates quo fugit beatae nihil vitae, natus alias debitis placeat. Veniam consequatur autem ullam error adipisci?</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .left-content {
    background-color: #ffe476;
  }

  .right-content {
    background: #fff;
    padding: 50px;
    margin-top: 80px;
    display: block;
  }

  button {
    font-size: 1.5em;
    margin-top: 100px;
  }

  .subtxt {
    font-size: 1.5em;
    margin-top: 30px;
  }

</style>