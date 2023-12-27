import { MetaTags } from '@redwoodjs/web'
import EventHeaderCell from 'src/components/EventHeaderCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const GroupInvitePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Invite Friends and Family" />
      <EventHeaderCell id={id} />
      <InviteGroup id={id} />
    </>
  )
}

export default GroupInvitePage
