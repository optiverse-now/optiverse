import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/app/components/ui/shadcn-ui/sidebar";
import { AppSidebar } from "@/app/components/ui/custome-ui/molecules/app-sidebar";

export const metadata: Metadata = {
  title: "optiverse",
  description: "optiverse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
