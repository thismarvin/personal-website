<template>
  <div class="container">
    <footer>
      <ul>
        <li>
          <span class="purple">let</span> social
          <span class="blue">= {</span>
        </li>
        <li>
          <span class="tab"></span>
          <span class="red">
            email
            <span class="blue">: </span>
          </span>
          <a href="mailto:contact@thismarvin.com">
            <span class="green">"contact@thismarvin.com"</span>
            <span class="blue">,</span>
          </a>
        </li>
        <li>
          <span class="tab"></span>
          <span class="red">
            github
            <span class="blue">: </span>
          </span>
          <a href="http://github.com/thismarvin">
            <span class="green">"github.com/thismarvin"</span>
          </a>
        </li>
        <li>
          <span class="blue">};</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/functions.scss";

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  color: #a6accd;
}

.container {
  margin: 0 $mobile-margin;
  margin-top: 4em;
  margin-bottom: 4em;

  display: flex;
  align-items: center;
  justify-content: center;
}

.tab {
  padding: 0 0 0 1.25em;
}

.blue {
  color: #89ddff;
}

.purple {
  color: #c790df;
}

.red {
  color: #ff5370;
}

.green {
  color: #c3df6e;
  text-decoration: underline;
}
</style>