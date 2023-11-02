import { Checkbox, FormControlLabel } from '@mui/material';

const FormInput = ({ label = '', name, value, form, onChecked = () => {} }) => {
  return (
    <div className='FormInput'>
      <FormControlLabel control={<Checkbox name={name} onChange={onChecked} checked={form[name]} />} label={label} />
    </div>
  );
};

export default FormInput;
