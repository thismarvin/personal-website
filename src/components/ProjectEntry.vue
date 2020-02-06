<template>
  <div class="project-entry container">
    <div class="preview">
      <img :src="pathToPreview" alt="Project Preview" />
    </div>
    <div class="title">
      <h2>{{ entry.subtitle }}</h2>
      <h1>{{ entry.title }}</h1>
    </div>
    <div class="about">
      <p>{{ entry.description }}</p>
    </div>
    <div class="links"></div>
  </div>
</template>

<script>
export default {
  name: "ProjectEntry",
  components: {},
  props: {
    entry: Object
  },
  computed: {
    pathToPreview: function() {
      return `/images/${this.entry.image}`;
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
  color: text-color(secondary);

  @include desktop {
    margin-top: 0.5em;
  }
}

h1 {
  margin: 0;
  color: text-color(primary);

  @include desktop {
    font-size: 2.5em;
  }
}

p {
  margin-top: 0.25em;
  color: text-color(secondary);

  @include desktop {
    margin: 0;
    margin-bottom: 1em;
  }
}

img {
  width: 100%;
  height: auto;
  margin-bottom: 1em;

  @include desktop {
    padding-right: 2em;
    margin-bottom: 0;
    width: calc(100% - 2em);
  }
}

.container {
  margin: 0 2 * $container-margin;

  @include desktop {
    display: grid;
    grid-template-areas:
      "preview title"
      "preview about"
      "preview links";
    grid-template-columns:
      calc(500px - var(--container-margin))
      calc(500px - var(--container-margin));
  }
}

.button {
  margin-bottom: 0.5em;
}

.links {
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

@include desktop {
  .preview {
    grid-area: preview;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    grid-area: title;
  }

  .about {
    grid-area: about;
  }

  .links {
    grid-area: links;
  }
}
</style>