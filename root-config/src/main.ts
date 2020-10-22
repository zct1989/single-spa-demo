import { createApp } from "vue";
import App from "./App.vue";
import { pluginInstall } from "./plugins";
import { SingleSpaInstall } from "./single-spa-config";

import "./assets/styles/index.less";
// 启动项目
pluginInstall(createApp(App))
  .mount("#app")
  .$nextTick(SingleSpaInstall);
