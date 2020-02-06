<template>
  <div :id="id" class="wave"></div>
</template>

<script>
const { Wave } = require("../modules/wave.js");

export default {
  name: "Wave",
  props: {
    id: String,
    color: String,
    backgroundColor: String
  },
  mounted: function() {
    this.$nextTick(function() {
      const backgroundColor = this.backgroundColor === undefined ? "None" : this.backgroundColor;
      new Wave(this.id, 0.5, 0.3, this.color, backgroundColor);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/mixins.scss";

.wave {
  width: 100%;
  height: 25vw;

  @include tablet {
    height: 8em;
  }

  @include desktop {
    height: 10em;
  }
}
</style>