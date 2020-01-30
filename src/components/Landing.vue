<template>
  <div id="landing">
    <div class="container">
      <h1>
        Game
        <br />Developer
        <br />Frontend
        <br />Developer
        <br />Software
        <br />Developer
        <br />
      </h1>
      <p>
        I’m Marvin, and I make games, websites, and software. I can help bring your ideas and designs to life
        through creative media.
      </p>
      <a href="mailto:contact@thismarvin.com">Contact Me</a>
    </div>
    <Wave id="wave-landing"/>
  </div>
</template>

<script>
import Wave from "./Wave.vue";

export default {
  name: "Landing",
  components: {
    Wave
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/functions.scss";

h1 {
  margin: 0;
  line-height: 0.8em;
  font-family: "Prabowow", sans-serif;
  font-size: 16vw;
}

p {
  text-align: center;
  font-size: 1.4em;
  line-height: 1.1em;
}

a {
  background: transparent;
  width: 80%;
  padding: 1em;
  border: 2px solid get-color(white);
  border-radius: 3em;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}

#landing {
  background: linear-gradient(
    get-color(gradient-start),
    get-color(gradient-end)
  );
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 4 * $mobile-margin;
  padding-bottom: 2 * $mobile-margin;
}
</style>