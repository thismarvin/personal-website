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
      <div class="reveal" @click="toggleReveal">
        <span>Show {{ moreInfoRevealed ? "Less" : "More" }}</span>
        <svg
          viewBox="0 0 100 100"
          class="arrow"
          :class="[{'start-turn-up': moreInfoRevealed}, {'start-turn-down': !moreInfoRevealed}]"
        >
          <g>
            <path d="M5 34.69L49.75 80.22L95 34.69L79.59 19.78L49.75 50.6L19.92 19.78L5 34.69Z" />
          </g>
        </svg>
      </div>

      <transition appear name="reveall" v-if="moreInfoRevealed">
        <div class="more-info">
          <p>{{ entry.description }}</p>
          <p>{{ entry.background }}</p>
          <div class="links">
            <HyperButton :link="entry.sourceCode" callToAction="View Source Code" class="button" />
            <HyperButton :link="entry.projectPage" callToAction="View Project Page" class="button" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import HyperButton from "./HyperButton.vue";

export default {
  name: "ProjectEntry",
  components: {
    HyperButton
  },
  props: {
    entry: Object
  },
  data() {
    return {
      moreInfoRevealed: false
    };
  },
  computed: {
    pathToPreview: function() {
      return `/images/${this.entry.image}`;
    },
    manageArrowAnimation: function() {
      return !this.moreInfoRevealed
        ? this.arrowAnimationTurnUp
        : this.arrowAnimationTurnDown;
    }
  },
  methods: {
    toggleReveal: function() {
      this.moreInfoRevealed = !this.moreInfoRevealed;
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
  font-size: 1.5em;
  color: text-color(secondary);

  @include desktop {
    margin-top: 0.5em;
  }
}

h1 {
  margin: 0;

  @include desktop {
    font-size: 2.5em;
  }
}

p {
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

span {
  color: text-color(tertiary);
}

.container {
  margin: 0 2 * $container-margin;
  padding: 1em 0;

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

.reveal {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.arrow {
  fill: #ffffff;
  stroke: none;
  stroke-width: 1px;

  width: 24px;
  height: auto;

  transition: transform;
}

.more-info {
  padding: 0 1em;
  transition: opacity;
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

.start-turn-up {
  animation: turn-up 0.5s ease forwards;
}

.start-turn-down {
  animation: turn-down 0.5s ease forwards;
}

.reveall-enter-active {
  animation: fade-in 0.25s ease forwards;
}

.reveall-leave-active {
  animation: fade-in 0.15s ease reverse;
}

@keyframes turn-up {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-180deg);
  }
}

@keyframes turn-down {
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>