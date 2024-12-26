import type { Meta, StoryObj } from '@storybook/react'
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarCollapseButton,
  SidebarNav,
  SidebarFooter,
  SidebarSearch,
} from '.'

const meta = {
  title: 'UI/Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const SidebarDemo = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-lg font-semibold">Sidebar</h2>
        <SidebarCollapseButton />
      </SidebarHeader>
      <SidebarSearch>
        <input placeholder="Search..." />
      </SidebarSearch>
      <SidebarNav>
        <div className="space-y-1">
          <button className="w-full text-left p-2 hover:bg-accent rounded-md">
            Home
          </button>
          <button className="w-full text-left p-2 hover:bg-accent rounded-md">
            Dashboard
          </button>
          <button className="w-full text-left p-2 hover:bg-accent rounded-md">
            Settings
          </button>
        </div>
      </SidebarNav>
      <SidebarFooter>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export const Default: Story = {
  render: () => <SidebarDemo />,
}

export const Floating: Story = {
  render: () => <SidebarDemo />,
  args: {
    variant: 'floating',
  },
}

export const Inset: Story = {
  render: () => <SidebarDemo />,
  args: {
    variant: 'inset',
  },
}

export const Right: Story = {
  render: () => <SidebarDemo />,
  args: {
    side: 'right',
  },
}

export const IconCollapsible: Story = {
  render: () => <SidebarDemo />,
  args: {
    collapsible: 'icon',
  },
}

export const NonCollapsible: Story = {
  render: () => <SidebarDemo />,
  args: {
    collapsible: 'none',
  },
} 