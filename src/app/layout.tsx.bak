import { ReactNode } from 'react';

// This layout is required for the root not-found.tsx to work.
// It passes children through directly so that:
// 1. [locale]/layout.tsx can define its own <html> and <body> with the correct lang attribute.
// 2. not-found.tsx can define its own <html> and <body>.
export default function RootLayout({ children }: { children: ReactNode }) {
    return children;
}
