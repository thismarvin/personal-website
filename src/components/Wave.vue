<template>
  <div :id="id" class="wave"></div>
</template>

<script>
const { Wave } = require("../modules/wave.js");

export default {
  name: "Wave",
  props: {
    id: String,
    isSecondary: Boolean
  },
  mounted: function() {
    this.$nextTick(function() {
      if (!this.isSecondary) {
        new Wave(this.id, 0.5, 0.3, "#000000");
      } else {
        new Wave(this.id, 0.5, 0.3, "#FF004D");
      }
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
  transform: translateY(5px);

  @include tablet {
    height: 8em;
  }

  @include desktop {
    height: 10em;
  }
}
</style>