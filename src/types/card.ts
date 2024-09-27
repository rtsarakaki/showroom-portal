import { Section } from './section'

export type Card = {
  id: number
  title: string
  description: string
  iconSvg: string
  navigateTo?: string
  sections?: Section[]
}
