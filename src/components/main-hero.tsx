
"use client";
import { JSX, SVGProps } from "react"
import { UserInfo } from "./user-info"
import { Timeline } from "./timeline"
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function MainHero() {
  const { theme, setTheme} = useTheme();
  const isDarkThemed = theme === "dark";
  return (
    <div key="1" className="
    ">
      <Button
        onClick={() => setTheme(isDarkThemed ? "light" : "dark")}
        className="flex items-center gap-2 bg-gradient-to-r
        from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg"
      >
        {
          isDarkThemed ? <MoonIcon /> : <SunIcon />
        }
        <span>Theme</span>
      </Button>
        <Timeline />
    </div>
  )
}


function WorkflowIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  )
}

