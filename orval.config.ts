import { defineConfig } from "orval";

export default defineConfig({
  pilotage: {
    input: "./platine-pilotage.json",
    output: {
      mode: "tags",
      target: "src/gen/pilotage/",
      schemas: "src/gen/pilotage/model",
      client: "react-query",
      httpClient: "axios",
      prettier: true,
      override: {
        mutator: {
          path: "src/functions/fetch.ts",
          name: "customPortailFetch",
        },
      },
    },
  },
  aiguillage: {
    input: "./platine-aiguillage.json",
    output: {
      mode: "tags",
      target: "src/gen/aiguillage/",
      schemas: "./src/gen/aiguillage/model",
      client: "react-query",
      httpClient: "axios",
      prettier: true,
      override: {
        mutator: {
          path: "src/functions/fetch.ts",
          name: "customAiguillageFetch",
        },
      },
    },
  },
});
