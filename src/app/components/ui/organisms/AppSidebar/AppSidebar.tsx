import { LucideIcon } from "lucide-react"
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarNav,
  SidebarCollapseButton,
} from "@/app/components/ui/organisms/Sidebar"
import styles from "./AppSidebar.module.scss"

export interface SidebarItem {
  title: string
  url: string
  icon: LucideIcon
}

export interface AppSidebarProps {
  title: string
  items: SidebarItem[]
}

export function AppSidebar({ title, items }: AppSidebarProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-lg font-semibold">{title}</h2>
          <SidebarCollapseButton />
        </SidebarHeader>
        <SidebarNav>
          <div className="space-y-1">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className={styles.link}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </SidebarNav>
      </Sidebar>
    </SidebarProvider>
  )
}
