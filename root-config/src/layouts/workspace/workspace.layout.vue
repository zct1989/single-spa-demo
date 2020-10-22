<template>
  <a-layout>
    <layout-header></layout-header>
    <a-layout>
      <layout-side></layout-side>
      <a-layout>
        <layout-tabs></layout-tabs>
        <layout-content>
          <slot></slot>
        </layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LayoutHeader from "./components/layout-header.vue";
import LayoutSide from "./components/layout-side.vue";
import LayoutContent from "./components/layout-content.vue";
import LayoutTabs from "./components/layout-tabs.vue";
@Options({
  components: {
    LayoutHeader,
    LayoutSide,
    LayoutContent,
    LayoutTabs,
  },
})
export default class WorkspaceLayout extends Vue {
  private collapsed = false;
}
</script>

<style lang="less" scoped>
// .workspace-layout {
//   display: grid;
//   grid-template-columns: 200px auto;
//   grid-template-rows: 60px 50px auto;
//   grid-template-areas:
//     "header header header"
//     "side tabs tabs"
//     "side content content";
// }

// .layout-container.collapsed {
//   grid-template-columns: 80px auto;
// }

// .wrap {
//   position: relative;
// }

// .logo-wrap {
//   grid-area: logo;
// }

// .header-wrap {
//   grid-area: header;
// }

// .side-wrap {
//   grid-area: side;
// }

// .tabs-wrap {
//   grid-area: tabs;
// }

// .content-wrap {
//   grid-area: content;
// }
</style>
