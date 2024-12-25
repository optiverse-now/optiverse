import { AppSidebar } from "@/app/components/ui/custome-ui/molecules/app-sidebar"
import { SidebarProvider } from "@/app/components/ui/shadcn-ui/sidebar"

export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>{children}</main>
    </SidebarProvider>
  )
} 