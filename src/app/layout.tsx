import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import { ClerkProvider } from '@clerk/nextjs'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Vitaehub',
    default: 'Vitaehub',
  },
  description:
    'Next Level profile',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        variables: { colorPrimary: '#000000' },
        elements: {
          formButtonPrimary: 'bg-black border border-black border-solid hover:bg-white hover:text-black',
          socialButtonsBlockButton:
            'bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black',
          socialButtonsBlockButtonText: 'font-semibold',
          formButtonReset:
            'bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black',
          membersPageInviteButton: 'bg-black border border-black border-solid hover:bg-white hover:text-black',
          card: 'bg-[#fafafa]',
        },
      }}
    >
      <html
        lang="en"
        className={clsx(
          'h-full bg-white antialiased',
          inter.variable,
          dmSans.variable,
        )}
      >

        <body className="flex min-h-full">
          <div className="flex w-full flex-col">{children}</div>
        </body>
      </html >
    </ClerkProvider>
  )
}
