<template>
  <!-- <a-layout style="padding: 0 24px 24px"> -->
  <!-- <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>List</a-breadcrumb-item>
      <a-breadcrumb-item>App</a-breadcrumb-item>
    </a-breadcrumb> -->
  <a-layout-content
    :style="{
      background: '#fff',
      padding: '24px',
      margin: 0,
      minHeight: '280px',
      position: 'relative',
    }"
  >
    <slot></slot>
  </a-layout-content>
  <!-- </a-layout> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class LayoutContent extends Vue {}
</script>
