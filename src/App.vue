<template>
  <div id="website">
    <div id="landing">
      <Landing />
    </div>

    <div id="collections">
      <ProjectCollection
        v-for="collection of collections"
        :key="collection.id"
        :id="collection.id"
        :name="collection.name"
        :information="collection.information"
        :entries="collection.entries"
      />
    </div>

    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";
import ProjectCollection from "./components/ProjectCollection.vue";
import Footer from "./components/Footer.vue";

import { collectionGameJams, collectionCSharp, collectionGameJams1, collectionCSharp1 } from "./modules/data.mjs";

export default {
  name: "app",
  components: {
    Landing,
    ProjectCollection,
    Footer
  },
  data() {
    return {
      id: 0,
      collections: [collectionGameJams, collectionCSharp, collectionGameJams1, collectionCSharp1]
    };
  },
  methods: {
    getUniqueID: function() {
      return this.id++;
    }
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

p {
  font-size: 1.4em;
  line-height: 1.1em;
}

.container {
  margin: 0 var(--container-margin);

  @include tablet {
    width: calc(var(--tablet-width) - var(--container-margin) * 2);
    margin: 0 auto;
  }

  @include desktop {
    width: calc(var(--desktop-width) - var(--container-margin) * 2);
    margin: 0 auto;
  }
}
</style>
