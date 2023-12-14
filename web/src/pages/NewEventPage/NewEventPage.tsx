import { navigate, routes } from '@redwoodjs/router'
import { DateField, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Checkbox from 'src/components/Checkbox/Checkbox'
import { toast } from '@redwoodjs/web/dist/toast'

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
    onCompleted: () => {
      toast.success("Event Successfully Created")
      navigate(routes.groupInvite())
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
        <Form onSubmit={onSubmit} className="auth-form">
          <fieldset disabled={loading}>
            <div className="field">
              <Label name="eventName">Event Name</Label>
              <TextField name="eventName" placeholder="" />
            </div>
            <div className="field">
              <Label name="eventDate">Event Date</Label>
              <DateField name="eventDate" placeholder="" />
            </div>
            <div className="field">
              <Checkbox
                name="sendReminder"
                label="Send out a reminder for an event"
              />
            </div>
            <div className="rw-button-group">
              <Submit>Submit</Submit>
            </div>
          </fieldset>
        </Form>
      </div>
    </>
  )
}

export default NewEventPage
