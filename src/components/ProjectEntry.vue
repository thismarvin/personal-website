<template>
  <div id="project-entry">
    <div class="container">
      <div id="preview">
        <img :src="pathToPreview" alt="Project Preview" />
      </div>
      <div id="title">
        <h2>{{ entry.subtitle }}</h2>
        <h1>{{ entry.title }}</h1>
      </div>
      <div id="about">
        <p id="description">{{ entry.description }}</p>
      </div>
      <div id="links"></div>
    </div>
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
  color: #8a8a8a;

  @include desktop {
    margin-top: 0.5em;
  }
}

h1 {
  margin: 0;

  color: white;
  //color:black;

  @include desktop {
    font-size: 2.5em;
  }
}

p {
  margin-top: 0.25em;
  color: #8a8a8a;
//color: rgb(26, 26, 26);

  @include desktop {
    margin: 0;
    margin-bottom: 1em;
  }
}

img {
  width: 100%;
  height: auto;
  padding-bottom: 1em;
  margin-top: -5em;

  @include desktop {
    padding-right: 2em;
    padding-bottom: 0;
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

#project-entry {
  margin: 1em;
  margin-top: 7em;
  margin-bottom: 0;

  border-radius: 1em;
  //background: #242424;
  //box-shadow: 0 0 10px black;

  //background-color: #FFFFFF;
  //box-shadow: 0 0 10px lightgray;
}

#preview {
  margin-top: 5em;
}

#links {
  padding-bottom: 1em;
}

.button {
  margin-bottom: 0.5em;
}

.secondary {
  background-color: white;
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