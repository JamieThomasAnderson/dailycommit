"use client";

import { Plus, GitBranch, Settings2, PieChart } from 'lucide-react';
import { Input } from "~/components/ui/input"

import Popup from "~/app/_components/popup";
import CommitPopupContent from "~/app/_components/commit";

import React, { ChangeEvent } from 'react';
import { createProject, Project } from "~/actions/db";
import { Button } from '~/components/ui/button';


interface MenuButtonProps {
  logo: React.ReactNode,
  name: string
}

const MenuButton: React.FC<MenuButtonProps> = ({ logo, name }) => {
  return (
    <div className="w-36 h-36 bg-neutral-900 text-white p-2 rounded hover:bg-stone-700"
      role="button"
    >
      {logo}
      <div className="font-semibold text-xl pt-8 pr-14">
        {name}
      </div>
    </div>
  )
}



const Menu: React.FC<{ userId: string | undefined }> = ({ userId }) => {

  const [project, setProject] = React.useState<string>("Select a Project");
  const [commitMsg, setCommitMsg] = React.useState<string>("");
  const [projectName, setProjectName] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);


  const handleCreateProject = async () => {
    await createProject(projectName, userId).then(() => setOpen(false))
  }

  const addCommit = () => {
    return;
  }

  return (
    <div className='flex items-stretch space-x-2'>
      <div className="flex flex-col space-y-1 pt-2">
        <Popup
          triggerContent = {
            <MenuButton
              logo={<GitBranch
                size={32}
                strokeWidth={3} />}
              name={"commit"}
            />
          }
          headerContent = {
            <div className="flex items-stretch">
              <div>
                Create a new commit
              </div>
              <div className="pl-2">
                <GitBranch size={20} />
              </div>
            </div>
          }
          mainContent = {
            <CommitPopupContent project={project} setProject={setProject} />
          }
          descriptionContent= {
            <p>
              Add a commit message to track your progress
            </p>
          }
          submitContent = {
            <Button onClick={() => console.log("test")}>Commit</Button>
          }
        />

        {/* <Popup
          title={"Create a new project"}
          description={"Looking to start something new?"}
          logo={<Plus size={20} />}
          onSubmit={handleCreateProject}
          trigger={
            <MenuButton logo={<Plus size={32} strokeWidth={3} />} name={"project"} />
          }
          content={
            <Input onChange={(e) => setProjectName(e.target.value)} placeholder='New project' maxLength={48} />
          }
          submitText={'Create'}
        /> */}
      </div>


      {/* <div className="w-36 h-36 bg-neutral-900 text-white p-2 rounded hover:bg-stone-700">
          <Plus size={32} strokeWidth={3} />
          <div className="font-semibold text-xl pt-8">
            project
          </div>
        </div>
      </div> */}

      <div className="flex flex-col space-y-1 pt-2">
        <div className="w-36 h-36 bg-neutral-900 text-white p-2 rounded hover:bg-stone-700">
          <PieChart size={32} strokeWidth={3} />
          <div className="font-semibold text-xl pt-8">
            insights
          </div>
        </div>
        <div className="w-36 h-36 bg-neutral-900 text-white p-2 rounded hover:bg-stone-700">
          <Settings2 size={32} strokeWidth={3} />
          <div className="font-semibold text-xl pt-8">
            settings
          </div>
        </div>
      </div>
    </div>
  )

}

export default Menu;

