import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server';


import CommitTable from "~/app/_components/table";
import CommitCalendar from "~/app/_components/calendar";
import Menu from "~/app/_components/menu";
import Demo from "~/app/_components/heatmap";

import { getProjects, createProject } from "~/actions/db";


export const dynamic = "force-dynamic";




const Projects = async () => {
  const projects = await getProjects();


  return (
    <div> {
      projects.map((project) => (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <Demo />
        </div>
      ))
    }
    </div>
  )
}

export default async function HomePage() {
  const user = await currentUser();
  
  return (
    <main className="flex flex-col">

      <SignedOut>
        <div className="flex w-full h-full justify-center items-center text-2xl font-semibold">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>

        <div className="flex flex-col justify-center items-center">
          <div className="relative h-42 w-[580px] text-[48px] font-semibold pt-16">
            Hi, {user?.firstName}
          </div>



          <div className="flex items-stretch space-x-2">
            <Menu userId={user?.id}/>

            <div className="flex h-80 flex-col overflow-y-scroll">
              <CommitCalendar />
            </div>

          </div>

          <div className="flex h-64 flex-col overflow-y-scroll">
            <CommitTable />
          </div>

          <div className="pt-16"></div>

          <Projects />
        </div>
      </SignedIn>
    </main>
  );
}
