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
      <HyperButton link="mailto:contact@thismarvin.com" callToAction="Contact Me" />
    </div>
  </div>
</template>

<script>
import HyperButton from "./HyperButton.vue";

export default {
  name: "Landing",
  components: {
    HyperButton
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

  @include tablet {
    font-size: 5.5em;
  }

  @include desktop {
    font-size: 5em;
  }
}

p {
  text-align: center;

  @include desktop {
    width: 350px;
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: calc(4 * var(--container-margin));
  padding-bottom: calc(2 * var(--container-margin));
}

#landing {
  background: $gradient-background;
}
</style>