import checkEnvironmentVariable from '@/utilities/checkEnviromentVariable'
import { GraphQLClient } from 'graphql-request'

const graphqlAPI = checkEnvironmentVariable(
  process.env.HYGRAPH_PROJECT_API,
  'HYGRAPH_PROJECT_API'
)

const graphqlAPIToken = checkEnvironmentVariable(
  process.env.HYGRAPH_DEV_AUTH_TOKEN,
  'HYGRAPH_DEV_AUTH_TOKEN'
)

const GraphqlClient = new GraphQLClient(graphqlAPI, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    authorization: `Bearer ${graphqlAPIToken}`
  },
  next: {
    revalidate: 0
  }
})

export default GraphqlClient
