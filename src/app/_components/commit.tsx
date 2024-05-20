import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup
} from "~/components/ui/dropdown-menu"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from '~/components/ui/textarea';

import { getProjects } from "~/actions/db";


import React, { useState, useEffect } from 'react';

interface CommitPopupContentProps {
  project: string,
  setProject: React.Dispatch<React.SetStateAction<string>>
}

const CommitPopupContent: React.FC<CommitPopupContentProps> = ({ project, setProject }) => {
  const [projects, setProjects] = useState<Array<Object>>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <div className="space-y-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full" asChild>
          <Button variant="outline">{project}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>Project</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={project} onValueChange={setProject}
          >
            {projects.map((project: any) => (
              <DropdownMenuRadioItem
                key={project.id} value={project.name}
              >
                {project.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Input placeholder='Progress update...' maxLength={48} />
      <Textarea placeholder='extended (optional)' maxLength={150} />
    </div>
  )
}

export default CommitPopupContent;
