<template>
  <a-layout-sider>
    <a-menu
      theme="dark"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @select="onSelect"
    >
      <a-sub-menu key="sub2">
        <template v-slot:title>
          <span><AppstoreOutlined /><span>Navigation Two</span></span>
        </template>
        <a-menu-item key="/">Option 2</a-menu-item>
        <a-menu-item key="/app01">Option 1</a-menu-item>
        <a-menu-item key="/app02">Option 1</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  MailOutlined,
  QqOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { navigateToUrl, triggerAppChange } from "single-spa";

@Options({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
})
export default class LayoutSide extends Vue {
  private selectedKeys = ["sub1"];
  private openKeys = ["sub1"];

  private collapsed = false;

  private onSelect({ key }) {
    navigateToUrl(key);
    triggerAppChange();
  }
}
</script>

<style></style>
