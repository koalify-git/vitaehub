import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FiSearch } from 'react-icons/fi'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span >Vitae</span>hub
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Build your own portofolio with VitaeHub and get hired by top companies.
            </p>
            <p>
              Create your profile in <b>minutes</b>.
            </p>
          </div>

          <h2
            className='text-2xl font-bold text-blue-600 mt-8'
          >
            Find if your user is already registered
          </h2>
          <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
            <input
              type="email"
              required
              placeholder="vitaehub.com/username"
              aria-label="Email address"
              className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 placeholder:text-slate-400 focus:outline-none
            max-w-full w-full
            font-display font-bold text-lg tracking-tight text-blue-400
            "
            />
            <Button type="submit">
              <span>
                <FiSearch />
              </span>
            </Button>
          </div>
        </div>

      </Container>
    </div>
  )
}
