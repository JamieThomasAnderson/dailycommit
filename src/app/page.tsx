import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server';

import { Album } from 'lucide-react';

import CommitTable from "~/app/_components/table";
import CommitCalendar from "~/app/_components/calendar";
import Menu from "~/app/_components/menu";
import Image from "next/image";
import ProjectHeatmap from "~/app/_components/heatmap";
import { Button } from "react-day-picker";

export const dynamic = "force-dynamic";

interface CircleProps {
  color: string;
  name: string;
}

const Circle: React.FC<CircleProps> = ({ color, name }) => {
  return (
    <div
      className="flex items-center justify-center w-4 h-4 rounded-full border border-slate-800"
      style={{ backgroundColor: color }}
    >
      <span className="text-xs text-white pl-20">{name}</span>
    </div>
  );
};

const ProjectPin = () => {
  return (
    <div className="border border-neutral-700 rounded h-20 w-full">
      <div className="flex items-stretch space-x-1.5  ">
        <Album className="w-7 h-7 text-neutral-400 pl-2 pt-3" />
        <a href="#" className="flex items-center text-sm text-blue-500 font-semibold hover:underline pt-2.5">
          Running
        </a>
        <div className="pt-2 ">
          <span className="inline-flex items-center px-1 rounded-full text-[11px] font-medium border border-neutral-600 text-neutral-400">
            Public
          </span>
        </div>
      </div>
      <div>
      </div>
      <p className="text-slate-400 pl-2 text-xs pt-2">Goal: Run 5KM Every Day</p>

      <Circle color="#3178C6" name="Typescript" />
    </div>
  )
}

export default async function HomePage() {
  const user = await currentUser();



  return (
    <main className="flex justify-center min-h-screen mt-6">
      <div className="w-full max-w-screen-xl p-4 shadow-md flex">
        <div className="w-1/4 min-w-[305px] p-6">


          <div className="">
            <Image
              src={user?.imageUrl ?? ''}
              width={600}
              height={600}
              alt={user?.fullName ?? ''}
              className="rounded-full"
            />

            <h1 className="text-xl font-semibold pr-4 pt-4">
              {user?.fullName}
            </h1>
            <h1 className="text-lg font-thin pb-4 text-slate-400 text-wrap">

              {user?.username}
            </h1>

            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          <div role="button" className="bg-black">
            Follow
          </div>


        </div>

        <div className="w-3/4">
          <div className="">
            <p className="text-sm pb-2 ">Pinned</p>
            <div className="flex items-stretch space-x-3 pb-3">
              <ProjectPin />
              <ProjectPin />
            </div>
            <div className="flex items-stretch space-x-3 pb-3">
              <ProjectPin />
              <ProjectPin />
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
