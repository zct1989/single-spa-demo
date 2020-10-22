export const applications = [
  {
    name: "@single-spa/welcome",
    app: "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
    activeWhen: [({ pathname }) => pathname === "/"],
  },
  {
    name: "app01",
    app: "http://localhost:4200/main.js",
    activeWhen: ["/app01"],
  },
  {
    name: "app02",
    app: "http://localhost:4300/main.js",
    activeWhen: ["/app02"],
  },
];
