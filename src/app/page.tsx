
import Demo from "src/app/heatmap";

const mockProjectNames = [
  "Journal",
  "Run",
  "Side Hustle"
];

const mockProjects = mockProjectNames.map((name, index) => ({
  id: index + 1,
  name,
}));


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">

      <div className="flex flex-col space-y-1">
        <div className="w-64 bg-black text-white p-2 rounded hover:bg-neutral-700">Date</div>
        <div className="w-64 bg-black text-white p-2 rounded hover:bg-neutral-700">Project</div>
      </div>

      <div>{
        mockProjects.map((project) => (
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
