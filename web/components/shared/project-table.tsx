'use client';

import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '../ui/badge';

export interface ProjectCardProps {
  title: string;
  monoTitle?: boolean;
  shortDescription: string;
  href: string;
  status: 'Maintained' | 'Active Development' | 'Archived' | 'Deprecated';
  image?: string;
  stack: string[];
  year: number;
}

const getStatusClasses = (status: ProjectCardProps['status']) => {
  switch (status) {
    case 'Maintained':
    case 'Active Development': {
      return 'bg-green-50 text-green-500 dark:bg-green-950 dark:text-green-400';
    }
    case 'Archived': {
      return 'bg-yellow-50 text-yellow-500 dark:bg-yellow-950 dark:text-yellow-400';
    }
    case 'Deprecated': {
      return 'bg-red-50 text-red-500 dark:bg-red-950 dark:text-red-400';
    }
  }
};

export function ProjectTable({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <div className="rounded-md border">
      {projects.map((project, index) => (
        <Link href={project.href} key={`project-${index}`}>
          <div className="hover:bg-secondary flex justify-between px-6 py-8 duration-150">
            <div className="flex items-center gap-6 lg:w-5/12">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={48}
                  height={48}
                  className="h-12 min-h-12 w-12 min-w-12 rounded-md object-cover"
                  unoptimized
                />
              ) : (
                <span className="bg-primary text-primary-foreground flex h-12 min-h-12 w-12 min-w-12 items-center justify-center rounded-md text-2xl font-semibold uppercase">
                  {project.title[0]}
                </span>
              )}

              <div className="space-y-2">
                <div className="flex gap-2 max-sm:flex-col sm:items-center sm:gap-4">
                  <h3
                    className={`font-semibold sm:text-xl ${project.monoTitle ? 'font-mono' : ''}`}
                  >
                    {project.title}
                  </h3>
                  <Badge className={`max-sm:text-xs ${getStatusClasses(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {project.shortDescription}
                </p>
              </div>
            </div>

            <div className="flex w-4/12 items-center gap-4 max-lg:hidden">
              {project.stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <span className="text-muted-foreground max-sm:hidden">{project.year}</span>
              <MoveRightIcon size={24} />
            </div>
          </div>
          {index < projects.length - 1 && <div className="mx-6 border-t" />}
        </Link>
      ))}
    </div>
  );
}
