'use client';

import { useState } from 'react';

import { ProjectCardProps, ProjectTable } from '@/components/shared/project-table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projects: (ProjectCardProps & { categories: string[] })[] = [
  {
    title: 'Planla',
    href: '/projects/planla',
    shortDescription: 'Easy-to-use and fun story point estimations.',
    status: 'Maintained',
    stack: ['Next.js', 'Express.js', 'Socket.IO'],
    year: 2024,
    categories: ['web'],
  },
  {
    title: 'otofix.io',
    href: '/projects/otofix',
    shortDescription: 'CRM system for car/motorcycle repair shops.',
    status: 'Active Development',
    stack: ['Next.js', 'Express.js', 'Prisma'],
    image: 'https://picsum.photos/536/354',
    year: 2026,
    categories: ['web'],
  },
];

const healthchecks: { title: string; status: 'Healthy' | 'Degraded' | 'Offline' }[] = [
  { title: 'Planla Frontend', status: 'Healthy' },
  { title: 'Planla Backend', status: 'Degraded' },
];

const getStatusClasses = (status: 'Healthy' | 'Degraded' | 'Offline') => {
  switch (status) {
    case 'Healthy':
      return 'text-green-500 dark:text-green-400';
    case 'Degraded':
      return 'text-yellow-500 dark:text-yellow-400';
    case 'Offline':
      return 'text-red-500 dark:text-red-400';
    default:
      return '';
  }
};

const allCategories = ['all', ...Array.from(new Set(projects.flatMap((p) => p.categories)))];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered =
    activeTab === 'all' ? projects : projects.filter((p) => p.categories.includes(activeTab));

  return (
    <div className="container mx-auto my-12 space-y-8 px-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          Things I&apos;ve built, collaborated or continue work on.
        </p>
      </div>

      {/* Status */}
      <div className="space-y-4">
        <div className="bg-card rounded-xl border px-6 py-4">
          <h2 className="mb-4 text-xl font-bold">Statuses</h2>
          {healthchecks.map((check, index) => (
            <div
              key={check.title}
              className={`flex items-center justify-between py-2 ${index < healthchecks.length - 1 && 'border-b'}`}
            >
              <span className="font-semibold">{check.title}</span>
              <span className={getStatusClasses(check.status)}>● {check.status}</span>
            </div>
          ))}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {allCategories.map((cat) => (
            <TabsTrigger key={cat} value={cat} className="capitalize">
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {allCategories.map((cat) => (
          <TabsContent key={cat} value={cat}>
            <ProjectTable projects={filtered} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
