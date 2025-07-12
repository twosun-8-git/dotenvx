import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My dotenvx",
  description: "dotenvxのサンプル",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-[800px]">
          <header className="flex justify-between items-center py-8">
            <h1 className="text-4xl font-bold">My dotenvx</h1>
            <p>
              状態管理ライブラリ&nbsp;
              <a
                href="https://dotenvx.com/"
                target="_blank"
                className="text-blue-500 underline"
              >
                &quot;dotenvx&quot;
              </a>
              &nbsp;のサンプルです。
            </p>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
