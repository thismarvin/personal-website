<template>
  <div id="collection">
    <Wave :id="getWaveStartName" :color="getWaveColor" :backgroundColor="getWaveBackgroundColor" />
    <div id="test" :class="{secondary : isSecondary}">
      <div id="information" class="container">
        <h2>Python + Pygame</h2>
        <div id="line"></div>
        <br />
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
    getWaveStartName: function() {
      return `wave-start-${this.name}`;
    },

    getWaveColor: function() {
      return this.information.waveBottom;
    },

    getWaveBackgroundColor: function() {
      return this.information.waveTop;
    },

    isSecondary: function() {
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

  color: white;
}

h2 {
  font-size: 1.2em;
  color: rgba(220, 220, 220, 0.75);
}

#line {
  width: 100%;
  height: 0.5em;
  background: linear-gradient(
    90deg,
    get-color(gradient-start),
    get-color(gradient-end)
  );
}

p {
  margin: 0;

  color: rgba(220, 220, 220, 0.75);
}

#collection {
  background-color: black;
}

#test {
  padding-bottom: 1em;
}

.secondary {
  background-color: #242424;
}

#information {
  padding-top: 4em;
  padding-bottom: 1em;
}
</style>