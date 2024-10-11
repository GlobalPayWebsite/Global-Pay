import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['jp', 'en'],

  // Used when no locale matches
  defaultLocale: 'jp',
  pathnames: {
    '/': '/',
    '/pathnames': {
      jp: '/pfadamen',
      en: '/pathnames',
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
