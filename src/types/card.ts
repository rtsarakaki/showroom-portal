import { Section } from './section'

export type Card = {
  title: string
  description: string
  iconSvg: string
  navigateTo: string
  sections: Section[]
}
