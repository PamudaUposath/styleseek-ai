import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StyleSeek AI — Conversational Fashion Discovery',
  description: 'AI-powered fashion discovery assistant built with Amazon Bedrock and Amazon Nova to help users find suitable clothing products using natural language.',
  keywords: ['StyleSeek AI', 'Amazon Bedrock', 'Amazon Nova', 'Fashion Discovery', 'Next.js 16', 'AWS Lambda'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-gray-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
