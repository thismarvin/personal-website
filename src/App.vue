<template>
  <div id="app">
    <div id="landing">
      <Landing />
    </div>
    <div id="entries">
      <ProjectEntry v-for="entry of entries" v-bind:key="entry.id" v-bind:entry="entry" />
    </div>
    <div id="footer">
      <Footer />
    </div>
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
          description:
            "Morro is a cross platform 2D game engine written in C# on top of the MonoGame Framework.",
          background:
            "Morro is a passion project that is constantly being tweaked and improved. Morro mainly caters to 2D games, but it also can be used for any sort of creative visualizations.",
          sourceCode: "https://github.com/thismarvin/morro",
          projectPage: ""
        },
        {
          id: 1,
          title: "Quantum Caverns",
          subtitle: "action platformer",
          image: "qc_preview.png",
          description:
            "Quantum Caverns is a 2D Platformer written in Python using the Pygame library for the GameShell Game Jam (2019Q3).",
          background:
            "Quantum Caverns was designed to run natively on the ClockworkPi GameShell, but you can run the game on any computer that has the latest version of Python and Pygame installed.",
          sourceCode: "https://github.com/thismarvin/quantum-caverns",
          projectPage: "https://team-am-squared.itch.io/quantum-caverns"
        },
        {
          id: 2,
          title: "Diner Mafia",
          subtitle: "role playing game",
          image: "dm_preview.png",
          description:
            "Diner Mafia is a 2D RPG written in Python using the Pygame library for the GameShell Game Jam (2019Q2).",
          background:
            "Diner Mafia was designed to run natively on the ClockworkPi GameShell, but you can run the game on any computer that has the latest version of Python and Pygame installed.",
          sourceCode: "https://github.com/austin0209/diner-mafia",
          projectPage: "https://team-am-squared.itch.io/diner-mafia"
        },
        {
          id: 3,
          title: "Larry the Lightbulb",
          subtitle: "action platformer",
          image: "ltl_preview.png",
          description:
            "Larry the Lightbulb is a 2D Platformer written in C# using the MonoGame Framework.",
          background:
            "Larry the Lightbulb runs natively on Windows, and will run on MacOS and Linux if the Mono Framework is installed. Larry the Lightbulb is also available for free on iOS and Android!",
          sourceCode: "",
          projectPage: "https://flourflo.itch.io/larry-the-lightbulb"
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
