import GraphqlClient from './graphql-client'
import { gql } from 'graphql-request'
import { Header } from '@/types/header'

const GET_HEADER = gql`
  query getHeader {
    header(where: { slug: "home" }) {
      title
      slug
      logo
      buttonLogout
      menus {
        id
        title
        navigateTo
      }
      profileMenus {
        id
        title
        navigateTo
        iconSvg
      }
    }
  }
`

export async function getHeader(): Promise<Header> {
  try {
    const { header } = await GraphqlClient.request<{ header: Header }>(
      GET_HEADER
    )
    return header
  } catch (error) {
    throw new Error(`Failed to fetch header: ${error}`)
  }
}
