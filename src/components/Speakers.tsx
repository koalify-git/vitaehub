/* eslint-disable @next/next/no-img-element */
"use client";
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Widgets, { Block } from './Widgets';
import { motion } from 'framer-motion';
import { BackgroundImage } from './BackgroundImage';

const speakersData = [
  {
    date: 'April 4',
    jobTimeline:
    {
      date: '2019 - Present',
      organization: 'Globex Corporation',
      jobTitle: 'Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      skills: ['UI Design', 'UX Design', 'Graphic Design'],
      website: 'https://example.com',
    },
  },
  {
    date: 'April 5',
    jobTimeline:
    {
      date: '2017 - 2019',
      organization: 'Initech',
      jobTitle: 'Frontend Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      skills: ['React', 'JavaScript', 'TypeScript'],
      website: 'https://example.com',
    },
  },
  {
    date: 'April 6',
    jobTimeline:
    {
      date: '2015 - 2017',
      organization: 'Umbrella Corporation',
      jobTitle: 'Product Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      skills: ['Product Management', 'Agile', 'Scrum'],
      website: 'https://example.com',
    },
  },
  // Add other speakers...

];

function Speakers() {
  return (
    <section id="speakers" aria-labelledby="speakers-title" className="py-20 sm:py-32 min-h-screen 
    ">
      <Container className='relative'>
        <GridSystem />
      </Container>
    </section>
  )
}

function Timeline() {
  const timelineData = [
    {
      date: "2022-Present",
      title: "Software Engineer",
      organization: "Openvia",
      website: "https://example.com",
      description: "Worked as a Software Engineer in the team responsible for the development of the company's main product.",
    },
    {
      date: "2021-2022",
      title: "Junior Software Engineer - Trainee",
      organization: "Neoception",
      website: "https://example.com",
      description: "Worked as a Junior Software Engineer in the team responsible for the development of the company's main product.",
    },
  ];

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700
    mt-8
    ">
      {timelineData.map((item, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none">{item.date}</time>
          <h3 className="text-lg font-semibold ">{item.title}
            <span>
              <a href={item.website} className="text-blue-500 dark:text-blue-400 ml-2" target="_blank" rel="noopener noreferrer">
                @ {item.organization} 
              </a>
            </span>
          </h3>
          <p className="mb-4 text-base font-normal ">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

function GridSystem() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="col-span-4 sm:col-span-3">
     <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className=""
      >
        <Block>
          <SpeakerInfo />
        </Block>
        <Block className='mt-9'>
          <Timeline />
        </Block>
        </motion.div>
        </div>
  );
}

function SpeakerInfo() {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://randomuser.me/api/portraits/men/94.jpg"
        className="w-32 h-32 rounded-full mb-4 shrink-0"
        alt=""
      />
      <h1 className="text-xl font-bold">John Doe</h1>
      <p >Software Developer</p>
    </div>
  );
}

function RightColumn() {
  return (
    <div className="col-span-4 sm:col-span-9">
      <Widgets />
    </div>

  );
}

export { Speakers };
