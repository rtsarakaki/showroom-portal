'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type componentProps = {
  label: string
  placeHolder?: string
  type: string
  id: string
  onChange?: (value: string) => void
}

export default function InputWithLabel(props: Readonly<componentProps>) {
  const handleChangedValue = (value: string) => {
    props.onChange?.(value)
  }
  return (
    <div className="mt-3">
      <Label htmlFor={`${props.id}_input`}>{props.label}</Label>
      <Input
        type={props.type}
        id={`${props.id}_input`}
        placeholder={props.placeHolder ?? props.label}
        onChange={(e) => handleChangedValue(e.target.value)}
      />
    </div>
  )
}
