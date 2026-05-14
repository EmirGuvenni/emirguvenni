import { MoveRightIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { projects as _projects } from '@/app/projects';
import { ProjectTable } from '@/components/shared/project-table';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Progress } from '@/components/ui/progress';

export const metadata: Metadata = {
  title: 'Emir Güvenni — Full Stack Developer',
  description:
    'Full-stack developer. I build web systems, admin interfaces and automations with a focus on performance, simplicity and user experience.',
  openGraph: {
    url: 'https://emirguvenni.com',
  },
};

export default function Home() {
  const currentFocus = {
    title: 'otofix.io',
    description:
      'CRM system for car/motorcycle repair shops. Keep a tab on your branches, employees and customers.',
    workingOn: 'Building database tables',
    activity: 'Under Development',
    progress: 12,
  };

  const projects = _projects.slice(0, 3);

  return (
    <div className="container mx-auto my-12 space-y-16 px-6 lg:space-y-28">
      {/* Hero section */}
      <section className="flex flex-wrap justify-between max-lg:gap-16">
        <div className="flex w-full flex-col gap-6 lg:max-w-8/12 2xl:w-6/12">
          <span className="font-mono font-semibold text-green-400">● Open to work</span>
          <h1 className="font-[Geist] text-3xl font-bold text-nowrap sm:text-5xl md:text-6xl xl:text-7xl">
            Emir Güvenni
            <br />
            <span className="text-muted-foreground">Full Stack Developer</span>
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg">
            I build web systems, admin interfaces and automations with a focus on performance,
            simplicity and user experience.
          </p>

          <div className="flex gap-4 max-lg:hidden">
            <Link href="/projects">
              <Button variant="default" size="lg" className="cursor-pointer">
                View Projects <MoveRightIcon size={24} />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="lg" className="cursor-pointer">
                About me <MoveRightIcon size={24} />
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 lg:hidden">
            <Link href="/projects">
              <Button variant="default" size="default" className="cursor-pointer">
                View Projects <MoveRightIcon size={24} />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="default" className="cursor-pointer">
                About me <MoveRightIcon size={24} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Current Focus */}
        <div className="flex h-fit w-full flex-col rounded-md border px-6 lg:w-4/12">
          <div className="flex w-full items-center justify-between border-b pt-5 pb-4 text-sm">
            <span className="text-muted-foreground font-semibold uppercase">Current Focus</span>
            <span
              className={`rounded-md bg-green-50 px-3 py-1 font-semibold text-green-500 dark:bg-green-950 dark:text-green-400`}
            >
              {currentFocus.activity}
            </span>
          </div>
          <div className="space-y-6 py-6 font-mono">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">{currentFocus.title}</h2>
              <p className="text-muted-foreground text-base">{currentFocus.description}</p>
            </div>

            <div className="space-y-6">
              <p className="text-primary text-green-4 mt-4 rounded-md bg-gray-100 px-3 py-1 text-base font-semibold dark:bg-gray-900">
                <span className="text-green-400">&gt;</span> {currentFocus.workingOn}
              </p>

              <Field className="w-full max-w-sm">
                <FieldLabel htmlFor="focus-progress">
                  <span className="">{currentFocus.progress}%</span>
                </FieldLabel>
                <Progress value={currentFocus.progress} id="focus-progress" />
              </Field>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section>
        <div className="w-full space-y-4">
          {/* Top section */}
          <div className="flex w-full items-center justify-between">
            <h2 className="text-xl font-bold">
              <span className="max-sm:hidden">Featured </span>Projects
            </h2>
            <Link href="/projects">
              <Button variant="ghost" size="default" className="cursor-pointer">
                View all <span className="max-sm:hidden">projects </span>
                <MoveRightIcon size={24} />
              </Button>
            </Link>
          </div>

          {/* Project list */}
          <ProjectTable projects={projects} />
        </div>
      </section>
    </div>
  );
}
