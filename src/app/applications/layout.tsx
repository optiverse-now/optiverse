import { AppSidebar } from "@/app/components/ui/organisms/AppSidebar/AppSidebar"
import { SidebarProvider } from "@/app/components/ui/organisms/Sidebar"
import { Home, Book } from "lucide-react"
export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar 
        title="Life Platform" 
        items={[
          { title: "Home", url: "/applications/home", icon: Home },
          { title: "Diary", url: "/applications/diary", icon: Book },
        ]}
      />
      <main>{children}</main>
    </SidebarProvider>
  )
} 