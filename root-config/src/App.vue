<template>
  <root-layout>
    <div
      v-for="application of applications"
      :key="application.name"
      :id="`single-spa-application:${application.name}`"
    ></div>
  </root-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { applications } from "./applications";
import RootLayout from "./layouts/root-layout.vue";
@Options({
  components: {
    RootLayout,
  },
})
export default class App extends Vue {
  private get applications() {
    return applications;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
