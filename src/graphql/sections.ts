import { Section } from '@/types/section'
import GraphqlClient from './graphql-client'
import { gql } from 'graphql-request'

const GET_SECTIONS = gql`
  query getSections {
    sections {
      title
      slug
      iconSvg
    }
  }
`

export async function getSections(): Promise<Section[]> {
  try {
    const { sections } = await GraphqlClient.request<{ sections: Section[] }>(
      GET_SECTIONS
    )
    return sections
  } catch (error) {
    throw new Error(`Failed to fetch sections: ${error}`)
  }
}
