import ProjectHeatmap from "~/app/_components/heatmap";
import { getProjects, createProject } from "~/actions/db";

const Projects = async () => {
  const projects = await getProjects();


  return (
    <div> {
      projects.map((project) => (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <ProjectHeatmap />
        </div>
      ))
    }
    </div>
  )
}


const ProjectsPage = () => {
  return (
    <div>
      <Projects />
    </div>
  )
}

export default ProjectsPage;