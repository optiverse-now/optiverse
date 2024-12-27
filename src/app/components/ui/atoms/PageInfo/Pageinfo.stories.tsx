import type { Meta, StoryObj } from '@storybook/react'
import { PageInfo } from '.'

const meta = {
  title: 'UI/Atoms/PageInfo',
  component: PageInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
}
