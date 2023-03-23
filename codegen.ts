import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://transfa-staging.fly.dev/graphql',
  documents: ['src/graphql/queries/api/*.tsx'],
  generates: {
    'src/__generated__/': {
      preset: 'client',
      plugins: [],
      config: {
        useTypeImports: true,
      },
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  }
}

export default config;