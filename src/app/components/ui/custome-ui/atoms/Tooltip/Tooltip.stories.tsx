import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '.'

const meta = {
  title: 'UI/Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithSideOffset: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithCustomContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Add to library</p>
          <p className="text-muted-foreground">Save this item to your library</p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
} 