"use client";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SignInButton, SignIn, SignOutButton, UserButton, SignedOut, SignedIn } from '@clerk/nextjs';
import Logo from '@/app/favicon.svg'
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <Image src={Logo} height={64} width={64} alt='logo' />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <SignedOut>
            <SignInButton>
              <div
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in
              </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "min-w-12 min-h-12 border-2 border-gray-300 rounded-full overflow-hidden",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={Logo} height={64} width={64} alt='logo' />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <SignedOut>
                  <a
                    href="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
