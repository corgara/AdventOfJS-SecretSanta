import type { ListInvitesQuery } from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import Card from '../Card/Card'
import { toast } from '@redwoodjs/web/dist/toast'

export const QUERY = gql`
  query ListInvitesQuery($id: String!) {
    event(id: $id) {
      name
      invite {
        email
        id
        name
        user {
          avatar
        }
      }
    }
  }
`

const DELETE_INVITATION_MUTATION = gql`
  mutation DELETE_INVITATION_MUTATION($id: String!) {
    deleteInvite(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ event }: CellSuccessProps<ListInvitesQuery>) => {
  const [deleteInvite] = useMutation(DELETE_INVITATION_MUTATION, {
    onCompleted: () => {
      toast.success('Invite Deleted')
    }, onError: (error) => {
      toast.error(error.message)
      console.log(error)
    },
    refetchQueries: [QUERY]
  })

  const handleDelete = (inviteId) => {
    deleteInvite({
      variables: {
        id: inviteId,
      },
    })
  }

  return event.invite.map((item) => {
    return (
      <Card
        key={item.id}
        avatar={{
          alt: item.name,
          avatar: item?.user?.avatar,
          letter: item.name.split('')[0],
        }}
        email={item.email}
        name={item.name}
        isCloseShowing={true}
        handleClose={() => handleDelete(item.id)}
      />
    )
    //return <li key={item.id}>{JSON.stringify(item)}</li>
  })
}
