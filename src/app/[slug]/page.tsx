import { notFound } from 'next/navigation';
import { Speakers } from '@/components/Speakers';
import userList from "@/data/user.json"
import { BackgroundImage } from '@/components/BackgroundImage';

export default function Page({ params }: { params: { slug: string } }) {
  if(!userExists(params.slug)) notFound()
  return (
    <>
      <BackgroundImage className="-bottom-14 -top-36" />
      <Speakers />
    </>
    )
}

const userExists = (slug: string) => {
  return userList?.users.find((user) => user === slug)
}
