import antd from "ant-design-vue";
import { App } from "vue";

export default (app: App) => {
  app.use(antd.Button);
  app.use(antd.Layout);
  app.use(antd.Menu);
  app.use(antd.Breadcrumb);
};
