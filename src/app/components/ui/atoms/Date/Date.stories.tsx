import type { Meta, StoryObj } from '@storybook/react'
import { Date } from '.'

const meta = {
  title: 'UI/Atoms/Date',
  component: Date,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Date>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    date: new Date().toISOString(),
  },
}
