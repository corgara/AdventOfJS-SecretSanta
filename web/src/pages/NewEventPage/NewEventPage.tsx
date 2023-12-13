import { Link, routes } from '@redwoodjs/router'
import { DateField, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Checkbox from 'src/components/Checkbox/Checkbox'

const NewEventPage = () => {
  const onSubmit = (data) => {
      console.log({data});
  }
  return (
    <>
      <MetaTags title="Set Up Your Event"/>
      <div className="mx-auto max-w-[660px]">
        <HeaderWithRulers
          className={'mb-8 text-white'}
          heading={'SET UP YOUR EVENT'}
        />
        <Form onSubmit={onSubmit} className="auth-form">
          <div className="field">
            <Label name="groupName">Event Name</Label>
            <TextField name="groupName" placeholder="" />
          </div>
          <div className="field">
            <Label name="groupName">Event Date</Label>
            <DateField name="groupName" placeholder="" />
          </div>
          <div className="field">
            <Checkbox
              name="eventReminder"
              label="Send out a reminder for an event"
            />
          </div>
          <div className="rw-button-group">
            <Submit>Submit</Submit>
          </div>
        </Form>
      </div>
    </>
  )
}

export default NewEventPage
