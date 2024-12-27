import type { Meta, StoryObj } from '@storybook/react'
import { AppSidebar } from '.'
import { Home, Book } from "lucide-react"

const meta = {
  title: 'UI/Organisms/AppSidebar',
  component: AppSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppSidebar>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    title: "Home",
    url: "/applications/home",
    icon: Home,
  },
  {
    title: "Diary",
    url: "/applications/diary",
    icon: Book,
  },
]

export const Default: Story = {
  args: {
    title: "Life Platform",
    items: items,
  },
}
