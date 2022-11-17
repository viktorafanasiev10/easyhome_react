
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.easyhome.finance",
  documents: "src/**/*.ts",
  generates: {
    "./src/gql": {
      preset: "client",
      plugins: []
    },
    "./graphql-schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
