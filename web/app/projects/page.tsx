'use client';

import { useEffect, useState } from 'react';

import { HealthStatus, checkAllHealth } from '@/app/actions/healthcheck';
import { projects } from '@/app/projects';
import { ProjectTable } from '@/components/shared/project-table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type CheckStatus = HealthStatus | 'Checking';

const healthchecks = [
  { title: 'Planla Frontend', key: 'planlaFrontend' },
  { title: 'Planla Backend', key: 'planlaBackend' },
  { title: 'Type Streak', key: 'typeStreak' },
] as const;

const getStatusClasses = (status: CheckStatus) => {
  switch (status) {
    case 'Healthy':
      return 'text-green-500 dark:text-green-400';
    case 'Degraded':
      return 'text-yellow-500 dark:text-yellow-400';
    case 'Offline':
      return 'text-red-500 dark:text-red-400';
    default:
      return 'text-muted-foreground animate-pulse';
  }
};

const allCategories = ['all', ...Array.from(new Set(projects.flatMap((p) => p.categories)))];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [statuses, setStatuses] = useState<{
    planlaFrontend: CheckStatus;
    planlaBackend: CheckStatus;
    typeStreak: CheckStatus;
  }>({
    planlaFrontend: 'Checking',
    planlaBackend: 'Checking',
    typeStreak: 'Checking',
  });

  useEffect(() => {
    checkAllHealth().then(setStatuses);
  }, []);

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
          {healthchecks.map(({ title, key }, index) => (
            <div
              key={title}
              className={`flex items-center justify-between py-2 ${index < healthchecks.length - 1 && 'border-b'}`}
            >
              <span className="font-semibold">{title}</span>
              <span className={getStatusClasses(statuses[key])}>● {statuses[key]}</span>
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
