import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'

const meta = {
  title: 'UI/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const WithValue: Story = {
  args: {
    value: 'Hello, World!',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number...',
  },
}

export const File: Story = {
  args: {
    type: 'file',
  },
} 