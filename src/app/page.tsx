import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server';


import CommitTable from "~/app/_components/table";
import CommitCalendar from "~/app/_components/calendar";
import Menu from "~/app/_components/menu";
import Image from "next/image";
import ProjectHeatmap from "~/app/_components/heatmap";

export const dynamic = "force-dynamic";


const ProjectPin = () => {
  return (
    <div className="border border-neutral-700 rounded h-24 w-96">
      <div className="p-2">
        <p className="text-sm">Polytree</p>
        <p className="text-slate-400">Research & Notetaking Tool</p>
      </div>
    </div>
  )
}

export default async function HomePage() {
  const user = await currentUser();

  return (
    <main className="grid grid-cols-12 gap-4 relative">
      <div className="col-start-5 col-span-6 absolute top-0">
      <SignedOut>
        <div className="flex w-full h-full justify-center items-center text-2xl font-semibold">
          Please sign in above
        </div>
      </SignedOut>
      
      <div className="pl-4 pt-12">
        <p className="text-md font-thin pb-2">Pinned</p>
        <div className="flex items-stretch space-x-2">
          <ProjectPin />
          <ProjectPin />
        </div>
        <div className="flex items-stretch space-x-2 pt-2">
          <ProjectPin />
        </div>
      </div>
      <ProjectHeatmap />
      </div>

      <div className="col-start-3 col-span-2 p-6 mt-6 lg:w-64">
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
      <h1 className="text-xl pb-4 text-slate-400 text-wrap">
        {user?.username}
      </h1>

      <p className="text-sm">
        Bachelor of Information Technology (Computer Science) Student at the Queensland University of Technology (QUT) 
      </p>
      </div>
    </main>

    // <main className="flex flex-col">
    // <SignedIn>
    //     <div className="flex flex-col justify-center items-center">
    //       <div className="relative h-42 w-[580px] text-[48px] font-semibold pt-16">
    //         Hi, {user?.firstName}
    //       </div>

    //       <div className="flex items-stretch space-x-2">
    //         <Menu userId={user?.id}/>

    //         <div className="flex h-80 flex-col overflow-y-scroll">
    //           <CommitCalendar />
    //         </div>

    //       </div>

    //       <div className="flex h-64 flex-col overflow-y-scroll">
    //         <CommitTable />
    //       </div>

    //       <div className="pt-16"></div>

    //     </div>
    //   </SignedIn>
    // </main>
  );
}
