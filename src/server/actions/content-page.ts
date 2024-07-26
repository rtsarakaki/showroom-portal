import GraphqlClient from './graphql-client'
import { gql } from 'graphql-request'

const GET_PAGES = gql`
  query getContentPage {
    contentPages {
      sectionTitle
      slug
    }
  }
`

export async function getContentPage() {
  try {
    const result = await GraphqlClient.request(GET_PAGES)
    return result
  } catch (error) {
    return { error: error }
  }
}
