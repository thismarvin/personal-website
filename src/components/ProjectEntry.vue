<template>
  <div :class="{secondary : isSecondaryEntry}">
    <div class="container">
      <div id="title">
        <h2>{{ entry.subtitle }}</h2>
        <h1>{{ entry.title }}</h1>
      </div>
      <div id="preview">
        <img :src="pathToPreview" alt="Project Preview" />
      </div>
      <div id="about">
        <p>{{ entry.description }}</p>
        <p>{{ entry.background }}</p>
      </div>
      <div id="buttons">
        <HyperButton :link="entry.sourceCode" callToAction="View Source Code" class="button" />
        <HyperButton :link="entry.projectPage" callToAction="View Project Page" class="button" />
      </div>
    </div>
    <Wave :id="waveID" :isSecondary="!isSecondaryEntry" />
  </div>
</template>

<script>
import HyperButton from "./HyperButton.vue";
import Wave from "./Wave.vue";

export default {
  name: "ProjectEntry",
  components: {
    HyperButton,
    Wave
  },
  props: {
    entry: Object
  },
  computed: {
    pathToPreview: function() {
      return `/images/${this.entry.image}`;
    },
    waveID: function() {
      return "wave-" + this.entry.title.split(" ")[0].toLowerCase();
    },
    isSecondaryEntry: function() {
      return this.entry.id % 2 !== 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/functions.scss";

h2 {
  margin: 0;
  font-size: 1.2em;
}

h1 {
  margin: 0;
  margin-bottom: 0.5em;
}

p {
  font-size: 1.5em;
  line-height: 1.1em;
}

img {
  width: 100%;
  height: auto;
}

#buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.button {
  margin-bottom: 0.5em;
}

.secondary {
  background: $gradient-background;
}
</style>