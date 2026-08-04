import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'The Client Flow System | Lukhanyo Radebe', description: 'A polished lead-to-client operating system for branding and web-design studios.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
