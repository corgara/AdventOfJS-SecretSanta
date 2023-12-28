import { render } from '@redwoodjs/testing/web'

import SlideInPanel from './SlideInPanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SlideInPanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlideInPanel />)
    }).not.toThrow()
  })
})
