'use server';

import { db } from "~/server/db";
import { projects } from "~/server/db/schema";


export interface Project {
  id: number;
  name: string;
  heatmap: object;
  commits: object;
  userId: string;
}

export const getProjects = async () => {
  const projects = await db.query.projects.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return projects
}

export const setProject = async (newProject: Project) => {

  await db.insert(projects).values({
    name: newProject.name,
    heatmap: newProject.heatmap,
    commits: newProject.commits,
    userId: newProject.userId,
  });
}

export const createProject = async (name: string, userId: string | undefined) => {

  if (userId == null) return;

  const newProject: Project = {
    id: 0,
    name: name,
    userId: userId,
    heatmap: {},
    commits: {}
  }

  await db.insert(projects).values({
    name: newProject.name,
    heatmap: newProject.heatmap,
    commits: newProject.commits,
    userId: newProject.userId,
  });
}