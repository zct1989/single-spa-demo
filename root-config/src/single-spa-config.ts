import { registerApplication, start } from "single-spa";
import "zone.js/dist/zone";
import { applications } from "./applications";

export const SingleSpaInstall = () => {
  applications.forEach((appliction) =>
    registerApplication({
      name: appliction.name,
      app: () => System.import<any>(appliction.app),
      activeWhen: appliction.activeWhen,
    })
  );

  start({
    urlRerouteOnly: true,
  });
};
