import './/css/style.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Coding Website',
  description: 'A simple coding website built with Next.js',
};

// The Layout component takes `children` as a prop, allowing the layout to wrap all the individual pages.
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Common header with a simple navigation menu */}
        <header>
          <nav className="navbar">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content area where each page will be rendered */}
        <main className="content">
          {children}
        </main>

        {/* Common footer */}
        <footer>
          <p>&copy; 2024 Coding Website. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
