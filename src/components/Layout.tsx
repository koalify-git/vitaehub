import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({
  children,
  showFooter,
  showHeader
}: {
  children: React.ReactNode
  showFooter?: boolean
  showHeader?: boolean
}) {
  return (
    <>
      {showHeader && <Header />}
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}
