import fs from "node:fs";
import path from "node:path";
import type { PipelineSnapshot, Project, Stage, User } from "./launchweek-types";
import { STAGES, VARIANTS } from "./launchweek-types";

interface UserFile {
  user: User;
  projects: Project[];
}

const USERS_DIR = path.join(process.cwd(), "content", "users");

function readAllUserFiles(): UserFile[] {
  if (!fs.existsSync(USERS_DIR)) return [];
  const files = fs.readdirSync(USERS_DIR).filter((f) => f.endsWith(".json"));
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(USERS_DIR, f), "utf-8");
    return JSON.parse(raw) as UserFile;
  });
}

export function getAllUsers(): User[] {
  return readAllUserFiles().map((f) => f.user);
}

export function getUser(slug: string): User | undefined {
  return getAllUsers().find((u) => u.slug === slug);
}

export function getUserProjects(slug: string): Project[] {
  const file = readAllUserFiles().find((f) => f.user.slug === slug);
  return file ? file.projects : [];
}

export function getAllProjects(): Project[] {
  return readAllUserFiles().flatMap((f) =>
    f.projects.map((p) => ({ ...p, userSlug: f.user.slug })),
  );
}

export function getProject(userSlug: string, projectSlug: string): Project | undefined {
  return getAllProjects().find((p) => p.userSlug === userSlug && p.slug === projectSlug);
}

export function getPipelineSnapshot(): PipelineSnapshot {
  const projects = getAllProjects();
  const users = getAllUsers();
  const stages = [1, 2, 3, 4, 5, 6, 7, 8, 9] as Stage[];
  const byStage = stages.map((stage) => ({
    stage,
    count: projects.filter((p) => p.stage === stage).length,
  }));
  return {
    generatedAt: new Date().toISOString(),
    totalProjects: projects.length,
    totalUsers: users.length,
    byStage,
    projects,
  };
}

export function getLaunched(): Project[] {
  return getAllProjects()
    .filter((p) => p.stage === 9)
    .sort((a, b) => {
      const ad = a.launch?.launchedAt ?? a.enteredStageAt;
      const bd = b.launch?.launchedAt ?? b.enteredStageAt;
      return bd.localeCompare(ad);
    });
}

export function getFrameworkDoc() {
  return {
    stages: Object.entries(STAGES).map(([n, meta]) => ({
      stage: Number(n) as Stage,
      ...meta,
    })),
    variants: Object.entries(VARIANTS).map(([key, meta]) => ({
      key,
      ...meta,
    })),
  };
}

export function daysInStage(project: Project): number {
  const entered = new Date(project.enteredStageAt).getTime();
  const now = Date.now();
  return Math.max(0, Math.floor((now - entered) / (1000 * 60 * 60 * 24)));
}
