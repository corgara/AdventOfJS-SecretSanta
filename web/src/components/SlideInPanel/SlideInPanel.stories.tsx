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

import SlideInPanel from './SlideInPanel'

const meta: Meta<typeof SlideInPanel> = {
  component: SlideInPanel,
}

export default meta

type Story = StoryObj<typeof SlideInPanel>

export const Primary: Story = {}
