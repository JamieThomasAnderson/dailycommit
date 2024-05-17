"use client";

import { Plus, GitBranch, Settings2, PieChart } from 'lucide-react';
import Popup from "~/app/_components/popup";


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
import React from 'react';

const projects = [
    {
        Project: "Running",
    },
    {
        Project: "Biking",
    },
    {
        Project: "Journalling",
    },
    {
        Project: "Weights",
    },
    {
        Project: "Reading",
    },
    {
        Project: "Work",
    },
    {
        Project: "Sport",
    },

]

const Menu = () => {

    const [project, setProject] = React.useState("Select a Project");

    return (
        <div className='flex items-stretch space-x-2'>
            <div className="flex flex-col space-y-1 pt-2">
                <Popup
                    title={"Create a new commit"} description={"Track daily progress with a meaningful message"} logo={<GitBranch size={20}/>}
                    trigger={
                        <div className="w-36 h-36 bg-neutral-900 text-white p-2 rounded hover:bg-stone-700"
                            role="button">
                            <GitBranch size={32} strokeWidth={3} />
                            <div className="font-semibold text-xl pt-8 pr-14">
                                commit
                            </div>
                        </div>
                    } content={
                        <div className="space-y-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-1/2" asChild>
                                <Button variant="outline">{project}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64">
                                <DropdownMenuLabel>Project</DropdownMenuLabel>
                                <DropdownMenuSeparator />   
                                <DropdownMenuRadioGroup value={project } onValueChange={setProject}>
                                    {projects.map((project) => (
                                        <DropdownMenuRadioItem key={project.Project} value={project.Project}>{project.Project}</DropdownMenuRadioItem>
                                    ))}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Input placeholder='Progress update...' maxLength={48}/>
                        <Textarea placeholder='extended (optional)' maxLength={150}/>
                        </div>
                    }
                />


                <div className="w-36 h-36 bg-neutral-900 text-white p-2 rounded hover:bg-stone-700">
                    <Plus size={32} strokeWidth={3} />
                    <div className="font-semibold text-xl pt-8">
                        project
                    </div>
                </div>
            </div>

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

