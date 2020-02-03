<template>
  <div class="entry" :class="{secondary : isSecondaryEntry}">
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
      <div id="links">
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

  @include desktop {
    margin-top: 0.5em;
  }
}

h1 {
  margin: 0;
  margin-bottom: 0.5em;

  @include desktop {
    font-size: 2.5em;
  }
}

p {
  font-size: 1.5em;
  line-height: 1.1em;

  @include desktop {
    margin: 0;
    margin-bottom: 1em;
  }
}

img {
  width: 100%;
  height: auto;

  @include desktop {
    padding-right: 2em;
    width: calc(100% - 2em);
  }
}

#links {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include desktop {
    flex-direction: row;
    justify-content: flex-start;
  }
}

.entry {
  padding-top: 0.75em;
}

.button {
  margin-bottom: 0.5em;
}

.secondary {
  background: $gradient-background;
}

@include desktop {
  .container {
    display: grid;
    grid-template-areas:
      "preview title"
      "preview about"
      "preview links";
    grid-template-columns:
      calc(500px - var(--container-margin))
      calc(500px - var(--container-margin));
    //grid-template-rows: 100px 250px 100px;
  }

  #preview {
    grid-area: preview;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #title {
    grid-area: title;
  }

  #about {
    grid-area: about;
  }

  #links {
    grid-area: links;
  }
}
</style>