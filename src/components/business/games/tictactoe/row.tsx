interface ComponentProps {
  children: any
}

export default function Row({ children }: Readonly<ComponentProps>) {
  return <ul className="flex p-0 m-0 list-none">{children}</ul>
}
