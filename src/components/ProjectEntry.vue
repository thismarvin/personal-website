<template>
  <div class="project-entry container">
    <div class="preview">
      <img :src="pathToPreview" alt="Project Preview" />
    </div>
    <div class="title">
      <h2 :class="{'alternate-color': isAlternate}">{{ entry.subtitle }}</h2>
      <h1>{{ entry.title }}</h1>
    </div>
    <div class="revealer" @click="toggleReveal">
      <span :class="{'alternate-color': isAlternate}">Show {{ moreInfoRevealed ? "Less" : "More" }}</span>
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

    <transition appear name="reveal" v-if="moreInfoRevealed">
      <div class="about">
        <p :class="{'alternate-color': isAlternate}">{{ entry.description }}</p>
        <p :class="{'alternate-color': isAlternate}">{{ entry.background }}</p>
        <div class="links">
          <HyperButton :link="entry.sourceCode" callToAction="View Source Code" class="button" />
          <HyperButton :link="entry.projectPage" callToAction="View Project Page" class="button" />
        </div>
      </div>
    </transition>
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
    entry: Object,
    isAlternate: Boolean
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
    font-size: 1em;
  }
}

h1 {
  margin: 0;

  @include desktop {
    font-size: 1.5em;
  }
}

p {
  color: text-color(secondary);

  @include desktop {
    margin: 0;
    margin-bottom: 1em;
    font-size: 1em;
    line-height: 1.4em;
  }
}

img {
  width: 100%;
  height: auto;
  margin-bottom: 1em;

  @include desktop {
    margin-bottom: 0;
    width: 300px;
  }
}

span {
  color: text-color(tertiary);
  @include desktop {
    font-size: 0.9em;
  }
}

.container {
  margin: 0 2 * $container-margin;
  padding: 1em 0;
  background: transparent;

  @include desktop {
    //display: grid;
    //grid-template-areas:
    //  "preview title"
    //  "preview revealer"
    //  "preview about"
    //  "preview links";
    //grid-template-columns:
    //  calc(500px - var(--container-margin))
    //  calc(500px - var(--container-margin));
    margin: 0 auto;
    padding: 0;
    padding-bottom: 1em;
    width: 300px;
  }
}

.revealer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include desktop {
    margin-bottom: 1em;
    grid-area: revealer;
  }
}

.arrow {
  fill: #ffffff;
  stroke: none;
  stroke-width: 1px;

  width: 24px;
  height: auto;

  transition: transform;
}

.about {
  padding: 0 1em;
  transition: opacity;

  @include desktop {
    padding: 0;
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

.alternate-color {
  color: rgba(255, 255, 255, 0.85);
}

.desktop-only {
  display: none;
}

@include desktop {
  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: block;
  }

  .preview {
    grid-area: preview;
    //display: flex;
    //align-items: center;
    //justify-content: center;
  }

  .title {
    grid-area: title;
  }

  .about {
    grid-area: about;
    height: 350px;
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

.reveal-enter-active {
  animation: fade-in 0.25s ease forwards;
}

.reveal-leave-active {
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