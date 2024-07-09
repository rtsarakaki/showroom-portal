import Header from '@/components/building-blocks/text/header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AccessDenied() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Header size="3" text="Access Denied" />
      <p>Sorry, access to this content is restricted.</p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  )
}
