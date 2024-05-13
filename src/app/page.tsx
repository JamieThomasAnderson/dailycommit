import Demo from "src/app/heatmap";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  const projects = await db.query.projects.findMany({
    orderBy:(model, { desc }) => desc(model.id),
  });

  return (
    <main className="flex min-h-screen flex-col justify-center items-center">

      <div className="flex flex-col space-y-1">
        <div className="w-64 bg-black text-white p-2 rounded hover:bg-neutral-700">Date</div>
        <div className="w-64 bg-black text-white p-2 rounded hover:bg-neutral-700">Project</div>
      </div>


      <div>{
        projects.map((project) => (
          <div key={project.id}>
            <h1>{project.name}</h1>
            <Demo />
          </div>
        ))
      }
      </div>
    </main>
  );
}
