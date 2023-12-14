import { render } from '@redwoodjs/testing/web'

import GroupInvitePage from './GroupInvitePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GroupInvitePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupInvitePage />)
    }).not.toThrow()
  })
})
