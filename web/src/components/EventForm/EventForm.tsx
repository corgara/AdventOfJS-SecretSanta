import { navigate, routes } from '@redwoodjs/router'
import { DateField, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Checkbox from 'src/components/Checkbox/Checkbox'
import { toast } from '@redwoodjs/web/dist/toast'
import { formatDateFromDbForInput } from 'src/helpers/DateHelpers'

interface EventFormProps {
  buttonLabel?: string
  defaultValues?:{
    eventName?: string
    eventDate?: string
    eventReminder?: boolean
  },
  onSubmit: (data) => void
  loading?: boolean
}

const EventForm = ({
  buttonLabel = 'Submit',
  defaultValues = {},
  onSubmit,
  loading,
}: EventFormProps) => {
  return (
    <div>
      <Form onSubmit={onSubmit} className="auth-form">
        <fieldset disabled={loading}>
          <div className="field">
            <Label name="eventName">Event Name</Label>
            <TextField
              name="eventName"
              placeholder=""
              defaultValue={defaultValues.eventName}
            />
          </div>
          <div className="field">
            <Label name="eventDate">Event Date</Label>
            <DateField
              name="eventDate"
              placeholder=""
              defaultValue={formatDateFromDbForInput(defaultValues.eventDate)}
            />
          </div>
          <div className="field">
            <Checkbox
              defaultChecked={defaultValues.eventReminder}
              name="sendReminder"
              label="Send out a reminder for an event"
            />
          </div>
          <div className="rw-button-group">
            <Submit>{buttonLabel}</Submit>
          </div>
        </fieldset>
      </Form>
    </div>
  )
}

export default EventForm
