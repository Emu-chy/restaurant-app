import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/shared/layouts";
// import { lobsterFonts, notoSansFonts } from "~/utils/theme/fonts";
// import Layout from "~";

export const metadata: Metadata = {
  title: "X-Group",
  description: "X Group Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
