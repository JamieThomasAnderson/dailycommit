import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server';
import { db } from "~/server/db";

import { ArrowUpFromLine } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { Button } from "~/components/ui/button"


import Demo from "~/app/_components/heatmap";

export const dynamic = "force-dynamic";

const Projects = async () => {
  const projects = await db.query.projects.findMany({
    orderBy: (model, { desc }) => desc(model.id),
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
    <main className="flex flex-col justify-center items-center">

      <div className="flex items-stretch space-x-2">
        <div className="flex flex-col space-y-1 pt-24">
          <div className="pt-2"></div>
          <div className="w-32 h-32 bg-black text-white rounded p-2">Commit</div>
          <div className="w-32 h-32 bg-black text-white rounded p-2">Project</div>
        </div>
        <div className="flex h-96 flex-col pt-16 overflow-y-scroll">

          <Table>
            <TableCaption>A list of unpushed commits.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-64">Project</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Time</TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Programming</TableCell>
                <TableCell>05/02/2024</TableCell>
                <TableCell className="text-right">1:25:09</TableCell>
                <TableCell>
                  <div className="hover:bg-neutral-300 p-1 rounded">
                    <ArrowUpFromLine size={18} />
                  </div>
                </TableCell>
                <TableCell>
                  <div>

                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>




      <SignedOut>
        <div className="flex w-full h-full justify-center items-center text-2xl font-semibold">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <Projects />
      </SignedIn>
    </main>
  );
}
