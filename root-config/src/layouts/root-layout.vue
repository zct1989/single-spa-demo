<template>
  <workspace-layout class="workspace-layout">
    <slot />
  </workspace-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkspaceLayout from "./workspace/workspace.layout.vue";
@Options({
  components: {
    WorkspaceLayout,
  },
})
export default class RootLayout extends Vue {}
</script>

<style lang="less" scoped>
.workspace-layout {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
