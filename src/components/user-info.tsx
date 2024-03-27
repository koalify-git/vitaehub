
import { JSX, SVGProps } from "react"


export function UserInfo() {
  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid max-w-sm gap-6 mx-auto items-center grid-cols-1 lg:max-w-4xl lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-center space-y-2 lg:col-start-2 lg:col-span-2 lg:items-start lg:space-y-4">
            <div className="flex items-center space-x-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
                <img
                  alt="Avatar"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-3xl font-bold">Jane Doe</h1>
                <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 flex-shrink-0" />
                <a className="text-sm font-medium underline" href="#">
                  jane@example.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                <a className="text-sm font-medium underline" href="#">
                  123-456-7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <LocateIcon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4 flex-shrink-0" />
                <a className="text-sm font-medium underline" href="#">
                  example.com
                </a>
              </div>
            </div>
            <div className="grid gap-1">
              <h2 className="text-lg font-semibold">Summary</h2>
              <p className="text-sm text-gray-500/60 dark:text-gray-400/60">
                Experienced software engineer with a passion for creating elegant solutions. Skilled in full-stack web
                development and cloud architecture. Strong team player with excellent communication and problem-solving
                abilities.
              </p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function LinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}
