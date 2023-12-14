import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GroupInvitePage = () => {
  return (
    <>
      <MetaTags title="GroupInvite" description="GroupInvite page" />

      <h1>GroupInvitePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/GroupInvitePage/GroupInvitePage.tsx</code>
      </p>
      <p>
        My default route is named <code>groupInvite</code>, link to me with `
        <Link to={routes.groupInvite()}>GroupInvite</Link>`
      </p>
    </>
  )
}

export default GroupInvitePage
