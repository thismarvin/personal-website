<template>
  <div class="collection">
    <Wave :id="getWaveID" :color="getWaveColor" :backgroundColor="getWaveBackgroundColor" />
    <div class="contents" :class="{alternate : isAlternate}">
      <div class="container information">
        <h2>{{ information.technologies }}</h2>
        <hr />
        <h1>{{ information.header }}</h1>
        <p>{{ information.description }}</p>
        <br />
      </div>
      <ProjectEntry v-for="entry of entries" v-bind:key="entry.id" v-bind:entry="entry" />
    </div>
  </div>
</template>

<script>
import ProjectEntry from "./ProjectEntry.vue";
import Wave from "./Wave.vue";

export default {
  name: "ProjectCollection",
  components: {
    ProjectEntry,
    Wave
  },
  props: {
    id: Number,
    name: String,
    information: Object,
    entries: Array
  },
  data() {
    return {};
  },
  computed: {
    getWaveID: function() {
      return `wave-${this.name}`;
    },

    getWaveColor: function() {
      return this.information.waveBottom;
    },

    getWaveBackgroundColor: function() {
      return this.information.waveTop;
    },

    isAlternate: function() {
      return this.id % 2 !== 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/functions.scss";

h1 {
  margin: 0;
  margin-bottom: 0.5em;

  color: text-color(primary);;
}

h2 {
  font-size: 1.2em;
  color: text-color(secondary);
}

p {
  margin: 0;
  color: text-color(secondary);
}

hr {
  width: 100%;
  height: 0.5em;
  border: 0;
  background: linear-gradient(90deg, get-color(red), get-color(purple));
}

.collection {
  background-color: get-color(black);
}

.alternate {
  background-color: get-color(darkgray);
}

.contents {
  padding-bottom: 1em;
}

.information {
  padding-top: 4em;
  padding-bottom: 1em;
}
</style>