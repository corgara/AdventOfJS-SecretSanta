import type {
  FindEditEventQuery,
  FindEditEventQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import SlideInPanel from '../SlideInPanel/SlideInPanel'
import EventForm from '../EventForm/EventForm'
import { toast } from '@redwoodjs/web/dist/toast'

export const QUERY = gql`
  query FindEditEventQuery($id: String!) {
    event(id: $id) {
      id
      date
      name
      sendReminder
    }
  }
`

const UPDATE_EVENT_MUTATION = gql`
  mutation UPDATE_EVENT_MUTATION($id: String!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      date
      id
      name
      sendReminder
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditEventQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
  handleClose,
}: CellSuccessProps<FindEditEventQuery, FindEditEventQueryVariables> & {
  showEditForm: () => void
  handleClose: () => void
}) => {
  const [updateEvent, { loading }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event was Successfully Updated')
      handleClose()
    },
    onError: (error) => {
      console.log(error)
      toast.error(error.message)
    },
  })

  const onSubmit = (data) => {
    updateEvent({
      variables: {
        id: event.id,
        input: {
          name: data.eventName,
          date: data.eventDate,
          sendReminder: data.eventReminder,
        },
      },
    })
  }

  return (
    <div>
      <SlideInPanel handleClose={handleClose}>
        <h1 className="m-0 p-0 font-condensed text-[116px] uppercase leading-[0.8] text-white">
          Edit Details
        </h1>
        <h2 className="text-3x1 mb-10 font-handwriting uppercase text-white">
          Edit the Current Event
        </h2>
        <EventForm
          buttonLabel="Update"
          onSubmit={onSubmit}
          loading={loading}
          defaultValues={{
            eventName: event?.name,
            eventDate: event?.date,
            eventReminder: event?.sendReminder,
          }}
        />
      </SlideInPanel>
    </div>
  )

  //return <div>{JSON.stringify(editEvent)}</div>
}
