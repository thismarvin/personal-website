<template>
  <div id="app">
    <Landing/>
    <ProjectEntry v-for="entry of entries" v-bind:key="entry.id" v-bind:entry="entry" />
    <Footer/>
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
          description: "Morro is written in C# and uses the MonoGame Framework",
          background: "Morro is a passion project."
        },
        {
          id: 1,
          title: "Robosses",
          subtitle: "boss rush",
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
