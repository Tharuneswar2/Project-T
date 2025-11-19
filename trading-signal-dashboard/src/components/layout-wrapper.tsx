"use client";

import { Navbar } from './navbar';
import { Toaster } from 'sonner';
import { useEffect } from 'react';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize theme from localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-purple-950">
        {children}
      </main>
      <Toaster position="top-right" richColors />
    </>
  );
}
