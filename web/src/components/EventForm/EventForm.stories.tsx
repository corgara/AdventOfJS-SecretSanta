// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import EventForm from './EventForm'

const meta: Meta<typeof EventForm> = {
  component: EventForm,
}

export default meta

type Story = StoryObj<typeof EventForm>

export const Primary: Story = {}
