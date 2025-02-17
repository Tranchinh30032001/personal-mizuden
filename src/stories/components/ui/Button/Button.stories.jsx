import Button from '@/components/ui/Button/Button'
import { FaAppleAlt } from 'react-icons/fa'
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the button'
    },
    className: {
      control: 'text',
      description: 'Custom class name for styling'
    },
    prefixIcon: {
      control: 'object',
      description: 'Icon or element displayed before the label'
    },
    suffixIcon: {
      control: 'object',
      description: 'Icon or element displayed after the label'
    },
    children: {
      control: 'text',
      description: 'Content inside the button'
    },
    onClick: {
      action: 'Button clicked',
      description: 'Simulates the onClick event'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button when set to true'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Defines the button type'
    }
  }
}

export const Default = {
  args: {
    label: 'Click me',
    children: null,
    onClick: undefined,
    disabled: false,
    type: 'button'
  }
}

export const WithChildren = {
  args: {
    label: 'With Children',
    children: 'Save',
    prefixIcon: null,
    suffixIcon: null,
    onClick: undefined,
    disabled: false,
    type: 'button'
  }
}

export const DisabledButton = {
  args: {
    label: 'Disabled',
    children: null,
    prefixIcon: null,
    suffixIcon: null,
    onClick: undefined,
    disabled: true,
    type: 'button'
  }
}

export const WithPrefixIconOnly = {
  args: {
    label: 'With Prefix Icon',
    prefixIcon: <FaAppleAlt className='w-4 h-4 mr-2' />,
    suffixIcon: null,
    children: null,
    onClick: undefined,
    disabled: false,
    type: 'button'
  }
}

export const WithSuffixIconOnly = {
  args: {
    label: 'With Suffix Icon',
    prefixIcon: null,
    suffixIcon: <FaAppleAlt className='w-4 h-4 ml-2' />,
    children: null,
    onClick: undefined,
    disabled: false,
    type: 'button'
  }
}
