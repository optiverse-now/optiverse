import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '.'

const meta = {
  title: 'UI/Atoms/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '100px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100px' }}>
        <Story />
      </div>
    ),
  ],
}

export const NonDecorative: Story = {
  args: {
    decorative: false,
    'aria-label': 'Content separator',
  },
} 