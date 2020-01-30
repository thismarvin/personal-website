<template>
  <div>
    <Wave />
    <footer>
      <ul>
        <li>
          email:
          <a href="mailto:contact@thismarvin.com">contact@thismarvin.com</a>
        </li>
        <li>
          github:
          <a href="http://github.com/thismarvin">github.com/thismarvin</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Wave from "./Wave.vue";

export default {
  name: "Footer",
  components: {
    Wave
  }
};
</script>

<style lang="scss" scoped>
</style>