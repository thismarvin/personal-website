<template>
  <div>
    <Wave />
    <div id="entry">
      <h2>{{ entry.subtitle }}</h2>
      <h1>{{ entry.title }}</h1>
      <img :src="pathToPreview" alt="Project Preview"/>
      <p>{{ entry.description }}</p>
      <p>{{ entry.background }}</p>
    </div>
  </div>
</template>

<script>
import Wave from "./Wave.vue";

export default {
  name: "ProjectEntry",
  components: {
    Wave
  },
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
h1,
h2,
p {
    margin: 0;
    padding: 0;
}

#entry {
  padding: 1em;
  margin-bottom: 1em;
}

img {
    width: 100%;
    height: auto;
}

</style>