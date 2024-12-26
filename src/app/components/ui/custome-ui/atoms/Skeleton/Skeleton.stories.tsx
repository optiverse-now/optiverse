import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '.'

const meta = {
  title: 'UI/Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-12 w-12" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  ),
}

export const Circle: Story = {
  render: () => (
    <Skeleton className="h-12 w-12 rounded-full" />
  ),
}

export const Card: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <div className="space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  ),
} 