import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11 bg-zinc-800">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Container>
    </header>
  )
}
