import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
export const supportedLanguage = ['en', 'nl'];
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: supportedLanguage,

  // Used when no locale matches
  defaultLocale: supportedLanguage[0]
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
