import React from 'react'
import { icons } from 'lucide-react'

interface IconProps {
  name: keyof typeof icons
  color?: string
  size?: number | string
}

export function Icon(props: Readonly<IconProps>) {
  const LucideIcon = icons[props.name]

  return <LucideIcon color={props.color} size={props.size} />
}
