import Link from 'next/link';

import {
  DockerIcon,
  ExpressIcon,
  MongoDBIcon,
  NextjsIcon,
  NginxIcon,
  NodejsIcon,
  PostgreSQLIcon,
  PrismaIcon,
  ReactIcon,
  RedisIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from '@/components/icons';

const stack = [
  { label: 'TypeScript', icon: <TypeScriptIcon size={24} /> },
  { label: 'Next.js', icon: <NextjsIcon size={24} /> },
  { label: 'React', icon: <ReactIcon size={24} /> },
  { label: 'Node.js', icon: <NodejsIcon size={24} /> },
  { label: 'Express.js', icon: <ExpressIcon size={24} /> },
  { label: 'Prisma', icon: <PrismaIcon size={24} /> },
  { label: 'PostgreSQL', icon: <PostgreSQLIcon size={24} /> },
  { label: 'MongoDB', icon: <MongoDBIcon size={24} /> },
  { label: 'Redis', icon: <RedisIcon size={24} /> },
  { label: 'Nginx', icon: <NginxIcon size={24} /> },
  { label: 'Docker', icon: <DockerIcon size={24} /> },
  { label: 'Tailwind CSS', icon: <TailwindCSSIcon size={24} /> },
];

export default function About() {
  return (
    <div className="container mx-auto my-12 max-w-2xl space-y-12 px-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="text-muted-foreground">
          I&apos;m Emir — a full-stack developer based in Istanbul, leaning slightly toward the
          backend.
        </p>
      </div>

      <div className="text-muted-foreground space-y-6 leading-relaxed">
        <p>
          I got into this the slightly unusual way. I was into computers as a kid, which landed me
          in a web development high school, where what started as a hobby quietly turned into the
          thing I do. A few years of professional work later, I&apos;m still here and still
          building.
        </p>
        <p>
          Most of what I&apos;ve built sits behind the UI rather than in front of it: web scrapers,
          web3 tooling, CRMs, admin panels, real-time backends, terminal tools. I enjoy frontend
          work too — I just keep ending up on the side of the codebase where the interesting problem
          lives.
        </p>
        <p>
          A couple of things I care about when I&apos;m building. First, code that reads like a book
          — if you have to ask &quot;wait, what does this do?&quot;, I&apos;ve failed. Second, being
          deliberate about the stack. I try to stay close to what&apos;s new in the ecosystem, but
          every project gets its own honest weighing of trade-offs. The shiny option isn&apos;t
          always the right one.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">A couple of things I&apos;m happy to point at</h2>
        <div className="space-y-3">
          <div className="bg-card space-y-1 rounded-xl border px-6 py-5">
            <Link href="/projects/planla" className="font-semibold hover:underline">
              Planla.io
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I built the backend for this planning poker tool for agile teams. Real-time rooms,
              state synced across multiple participants, the usual interesting mess that comes with
              multiplayer.
            </p>
          </div>
          <div className="bg-card space-y-1 rounded-xl border px-6 py-5">
            <span className="font-semibold">Type-Streak</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A typing trainer I built years ago. Still like the idea enough that a rewrite with new
              features is on the list.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-card space-y-4 rounded-xl border px-8 py-6">
        <h2 className="text-xl font-bold">Stack</h2>
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
          {stack.map((item) => (
            <div key={item.label} className="flex items-center gap-3 py-3.5">
              {item.icon ?? <span className="size-5" />}
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
