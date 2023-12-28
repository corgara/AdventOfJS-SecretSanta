import { CheckboxField, Label } from '@redwoodjs/forms'

const Checkbox = ({ defaultChecked = false, label, name }) => {
  return (
    <div className="field">
      <CheckboxField name={name} defaultChecked={defaultChecked}/>
      <Label name={name}>{label}</Label>
    </div>
  )
}

export default Checkbox
