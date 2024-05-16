import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

import Demo from "~/app/_components/heatmap";

export const dynamic = "force-dynamic";

const Projects = async () => {
  const projects = await db.query.projects.findMany({
    orderBy:(model, { desc }) => desc(model.id),
  });

  return (
    <div>{
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


  return (
    <main className="flex min-h-screen flex-col justify-center items-center">

      <div className="flex flex-col space-y-1">
        <div className="w-64 bg-black text-white p-2 rounded hover:bg-neutral-700">Date</div>
        <div className="w-64 bg-black text-white p-2 rounded hover:bg-neutral-700">Project</div>
      </div>

      <SignedOut>
        <div className="flex w-full h-full justify-center items-center text-2xl font-semibold"> Please sign in above</div>
      </SignedOut>

      <SignedIn>
        <Projects />
      </SignedIn>
    </main>
  );
}
