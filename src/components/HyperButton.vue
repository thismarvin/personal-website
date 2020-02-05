<template>
  <a :href="link" :class="{invalid: isInvalidLink}">{{callToAction}}</a>
</template>

<script>
export default {
  name: "HyperButton",
  props: {
    link: String,
    callToAction: String
  },
  computed: {
    isInvalidLink: function() {
      return this.link === "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/functions.scss";

a {
  background: transparent;
  width: 85%;
  padding: 0.8em;
  border: 2px solid get-color(white);
  border-radius: 3em;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  @include desktop {
    width: auto;
    padding: 0.8em 2em;
    margin-right: 0.7em;
    font-size: 1em;
  }
}

.invalid {
  display: none;
}
</style>