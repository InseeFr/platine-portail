import { defineConfig } from "orval";

export default defineConfig({
  pilotage: {
    input: {
      target: "./platine-pilotage.json",
      filters: { tags: ["1 - Contacts", "2 - Questioning"] },
    },
    output: {
      mode: "tags",
      target: "src/gen/pilotage/",
      schemas: "src/gen/pilotage/model",
      client: "react-query",
      httpClient: "axios",
      prettier: true,
      override: {
        useDeprecatedOperations: false,
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
