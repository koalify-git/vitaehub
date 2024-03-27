import { WorkflowIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { JSX } from "react"
import { FaReact, FaBootstrap } from "react-icons/fa"
import { BiLogoTypescript } from "react-icons/bi"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"


const data: Event[] = [
  {
    icon: <WorkflowIcon />,
    title: "Software Engineer",
    photo: "/openvia-logo.svg",
    photoInvert: true,
    description: `Experienced software engineer with a passion for creating elegant solutions. Skilled in full-stack web
      development and cloud architecture. Strong team player with excellent communication and problem-solving skills.`,
    link: {
      url: "https://openvia.com",
      text: "@ Openvia",
    },
    time: "2022-Present",
    skills: [
      {
        icon: <FaReact className="w-6 h-6" />,
        title: "React",
        description: "A JavaScript library for building user interfaces."
      },
      {
        icon: <BiLogoTypescript className="w-6 h-6" />,
        title: "TypeScript",
        description: "A typed superset of JavaScript that compiles to plain JavaScript."
      },
      {
        icon: <FaBootstrap className="w-6 h-6" />,
        title: "Bootstrap",
        description: "A CSS framework for developing responsive and mobile-first websites."
      }
    ]
  },
  {
    icon: <WorkflowIcon />,
    title: "Software Engineer",
    photo: "/Neo.png",
    description: `Experienced software engineer with a passion for creating elegant solutions. Skilled in full-stack web
      development and cloud architecture. Strong team player with excellent communication and problem-solving skills.`,
    link: {
      url: "https://neoception.com",
      text: "@ Neoception",
    },
    time: "2021-2022"
  }
]


export function Timeline() {
  return (
    <div className="flex flex-col">
      {
        data.map((event, index) => (
          <TimelineEvent key={index} event={event} />
        ))
      }
    </div>
  )
}


interface TimelineEventProps {
  event: Event;
}

type Event = {
  icon: JSX.Element;
  title: string;
  description: string;
  photo?: string;
  link?: EventLink;
  time: string;
  skills?: Skill[];
  photoInvert?: boolean;
}

type EventLink = {
  url: string;
  text: string;
}

type Skill = {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function TimelineEvent({ event }: TimelineEventProps) {
  const { icon, title, description, time, link, photo, photoInvert } = event;

  return (
    <div className="flex items-start py-8 max-w-[350px]">
      <div className="mt-2">
        {
          photo ? (
            <Image className={
              photoInvert ? "filter invert dark:invert-0" : ""
            } src={photo} alt={title} height={200} width={200} />
        ) : (
        icon
        )
        }
      </div>
      <div className="flex flex-col items-start ml-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{title}
          {
            link && (
              <Link href={link.url} className="
              text-blue-500 dark:text-blue-400 ml-2
            ">
                {link.text}
              </Link>
            )
          }
        </h3>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 overflow-auto
        ">{description}</p>
        {
          event.skills && (
            <div className="flex mt-4 flex-row gap-2">
              {
                event.skills.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))
              }
            </div>
          )
        }
        <time className="mt-2 text-sm font-medium text-cyan-500 dark:text-cyan-400">{time}</time>
      </div>
    </div>
  );
}

export function Skill({ skill }: { skill: Skill }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            {skill.icon}
          </div>
        </TooltipTrigger>
        <TooltipContent data-side="bottom">
          <p>
            {skill.title}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}