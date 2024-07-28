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

const GET_SECTION = gql`
  query getSection($slug: String!) {
    section(where: { slug: $slug }) {
      title
      slug
      iconSvg
      cards {
        title
        description
        iconSvg
        navigateTo
      }
    }
  }
`

export async function getSection(slug: string): Promise<Section | null> {
  try {
    const { section } = await GraphqlClient.request<{ section: Section }>(
      GET_SECTION,
      { slug }
    )
    return section
  } catch (error) {
    throw new Error(`Failed to fetch section: ${error}`)
  }
}
