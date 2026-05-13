'use client';

import {
  FolderClosedIcon,
  HomeIcon,
  LayersIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  XIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { footerLinks } from '@/components/shared/footer';

const headerLinks = [
  { href: '/', label: '/home', icon: <HomeIcon size={24} /> },
  { href: '/projects', label: '/projects', icon: <FolderClosedIcon size={24} /> },
  { href: '/stack', label: '/stack', icon: <LayersIcon size={24} /> },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : prefersDark;
    setTheme(dark ? 'dark' : 'light');
  }, [setTheme]);

  const toggleTheme = () => {
    const saved = localStorage.getItem('theme');
    const nextTheme = saved === 'dark' ? 'light' : 'dark';
    setIsOpen(false);
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const getActiveClass = (href: string) => (pathname === href ? 'text-green-400' : '');

  return (
    <header className="relative">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:py-6 xl:py-8">
        <Link href="/">
          <div className="flex gap-1.5">
            <span className="font-[Geist] text-3xl font-extrabold">EG</span>
            <span className="self-center text-green-400">●</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center font-semibold md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {headerLinks.map((link) => (
              <li key={link.href} className={`hover:opacity-100 ${getActiveClass(link.href)}`}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="cursor-pointer p-2"
              >
                <SunIcon size={24} className="block dark:hidden" />
                <MoonIcon size={24} className="hidden dark:block" />
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="cursor-pointer p-2">
            <SunIcon size={24} className="block dark:hidden" />
            <MoonIcon size={24} className="hidden dark:block" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 md:hidden" onClick={() => setIsOpen(false)} />
          <nav className="bg-secondary text-secondary-foreground fixed right-4 bottom-4 left-4 rounded-xl py-8 md:hidden">
            <ul className="flex flex-col gap-1 font-semibold">
              {headerLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <li className={`flex gap-4 px-8 py-3 ${getActiveClass(link.href)}`}>
                    {link.icon}
                    {link.label}
                  </li>
                </Link>
              ))}
              <div className="border-secondary-foreground mx-6 my-2 border-b opacity-50" />
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <li className={`flex gap-4 px-8 py-3 ${getActiveClass(link.href)}`}>
                    {link.icon}
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
