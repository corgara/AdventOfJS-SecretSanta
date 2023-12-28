import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import { toast } from '@redwoodjs/web/dist/toast'
import EventForm from 'src/components/EventForm/EventForm'

const CREATE_EVENT_MUTATION = gql`
  mutation createEventMutation(
    $name: String!
    $date: DateTime!
    $sendReminder: Boolean!
  ) {
    createEvent(
      input: { name: $name, date: $date, sendReminder: $sendReminder }
    ) {
      date
      id
      createdAt
      name
    }
  }
`

const NewEventPage = () => {
  const [createEvent, { loading }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: (data) => {
      toast.success("Event Successfully Created")
      navigate(routes.groupInvite({id: data.createEvent.id}))
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
  })
  const onSubmit = (data) => {
    console.log({ data })
    createEvent({
      variables: {
        name: data.eventName,
        date: data.eventDate,
        sendReminder: data.sendReminder,
      },
    })
  }

  return (
    <>
      <MetaTags title="Set Up Your Event" />
      <div className="mx-auto max-w-[660px]">
        <HeaderWithRulers
          className={'mb-8 text-white'}
          heading={'SET UP YOUR EVENT'}
        />
        <EventForm onSubmit={onSubmit} loading={loading} />
      </div>
    </>
  )
}

export default NewEventPage
