import { ProjectCardProps } from '@/components/shared/project-table';

export const projects: (ProjectCardProps & { categories: string[] })[] = [
  {
    title: 'Planla',
    href: 'https://www.planla.io/',
    shortDescription: 'Easy-to-use and fun story point estimations.',
    status: 'Maintained',
    stack: ['Next.js', 'Express.js', 'Socket.IO'],
    year: 2024,
    image: 'https://www.planla.io/favicon.ico',
    categories: ['web'],
  },
  {
    title: 'Type-Streak',
    href: 'https://type-streak.emirguvenni.com/',
    shortDescription: '',
    status: 'Maintained',
    stack: ['Vue.js'],
    year: 2021,
    image:
      'https://raw.githubusercontent.com/EmirGuvenni/type-streak/refs/heads/main/public/favicon.ico',
    categories: ['web'],
  },
  {
    title: 'otofix.io',
    shortDescription: 'CRM system for car/motorcycle repair shops.',
    status: 'Under Development',
    stack: ['Next.js', 'Express.js', 'Prisma'],
    year: 2026,
    categories: ['web'],
  },
  {
    title: 'Borsa Bot',
    href: 'https://github.com/EmirGuvenni/Borsa-Bot',
    shortDescription: 'A Discord bot that fetches the conversion rate of TRY to USD and EUR.',
    status: 'Archived',
    stack: ['TypeScript', 'Discord.js', 'Node.js'],
    year: 2021,
    categories: ['bot'],
  },
  {
    title: 'Random Botsons',
    href: 'https://github.com/EmirGuvenni/random-botsons',
    shortDescription: 'A Discord bot that rolls the dice, tosses a coin, that sort of things.',
    status: 'Archived',
    stack: ['JavaScript', 'Discord.js', 'Node.js'],
    year: 2020,
    categories: ['bot'],
  },
];
