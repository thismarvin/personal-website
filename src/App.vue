<template>
  <div id="app">
    <Landing />
    <ProjectEntry v-for="entry of entries" v-bind:key="entry.id" v-bind:entry="entry" />
    <Footer />
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";
import ProjectEntry from "./components/ProjectEntry.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Landing,
    ProjectEntry,
    Footer
  },
  data() {
    return {
      entries: [
        {
          id: 0,
          title: "Morro",
          subtitle: "game engine",
          image: "me_preview.png",
          description: "Morro is written in C# and uses the MonoGame Framework",
          background: "Morro is a passion project."
        },
        {
          id: 1,
          title: "Quantum Caverns",
          subtitle: "action platformer",
          image: "qc_preview.png",
          description:
            "Robosses is written in Python and uses the pygame Framework",
          background: "Robosses was made for the GameShell Game Jam 2019Q4."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./scss/variables.scss";
@import "./scss/mixins.scss";
@import "./scss/functions.scss";

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  background-color: get-color(black);
}

* {
  font-family: "Roboto", sans-serif;
  color: white;
}

.container {
  margin: 0 $mobile-margin;
}
</style>
