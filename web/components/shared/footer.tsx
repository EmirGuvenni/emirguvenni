'use client';

import { MailIcon } from 'lucide-react';
import Link from 'next/link';

import { GithubIcon, LinkedInIcon } from '@/components/icons';

export const footerLinks = [
  { href: 'https://github.com/EmirGuvenni', label: 'GitHub', icon: <GithubIcon size={24} /> },
  {
    href: 'https://linkedin.com/in/emirguvenni',
    label: 'LinkedIn',
    icon: <LinkedInIcon size={24} />,
  },
  { href: 'mailto:contact@emirguvenni.com', label: 'Email', icon: <MailIcon size={24} /> },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:py-6">
        <Link href="/">
          <div>
            <div className="flex gap-1.5">
              <span className="font-[Geist] text-3xl font-extrabold">EG</span>
              <span className="self-center text-green-400">●</span>
            </div>
            <span className="text-muted-foreground text-sm max-md:hidden">© 2026 Emir Güvenni</span>
          </div>
        </Link>

        <div className="flex gap-4 md:gap-6 lg:gap-10">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground flex gap-1 p-2 duration-150"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
