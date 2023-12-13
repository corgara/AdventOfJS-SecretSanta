import { CheckboxField, Label } from '@redwoodjs/forms'

const Checkbox = ({ label, name }) => {
  return (
    <div className="field">
      <CheckboxField name={name} />
      <Label name={name}>{label}</Label>
    </div>
  )
}

export default Checkbox
