import { Box, Button, Container, Divider, Slider } from '@mui/material';
import CopyToClipboardButton from '../../components/CopyToClipboardButton/CopyToClipboardButton';
import FormInput from '../../components/FormInput/FormInput';
import { useForm } from '../../hooks/useForm';
import './Form.scss';

const Form = () => {
  const { form, setForm, generatePassword, onChecked } = useForm({
    passwordLength: 10,
    checkboxes: {
      lowercase: true,
      uppercase: false,
      numbers: false,
      symbols: false,
    },
    password: '',
  });

  return (
    <Container maxWidth='xs'>
      <Box>
        <form>
          <label>
            <Box sx={{ position: 'relative', m: '0 0 15px' }}>
              <textarea
                value={form.password}
                rows={5}
                cols={30}
                className='textarea'
              />
              <Box
                sx={{
                  position: 'absolute',
                  right: '5px',
                  top: '50%',
                  transform: 'translate(0, -50%)',
                }}>
                <CopyToClipboardButton toCopy={form.password} />
              </Box>
            </Box>
          </label>
          <label>
            <div>Password length {form.passwordLength}</div>
            <Slider
              value={form.passwordLength}
              aria-label='Default'
              valueLabelDisplay='auto'
              min={10}
              max={100}
              name='passwordLength'
              onChange={({ target: { name, value } }) => {
                setForm({ ...form, [name]: value });
              }}
            />
          </label>
          <Divider />
          <FormInput
            label='Include Lowercase'
            name='lowercase'
            onChecked={onChecked}
            form={form.checkboxes}
          />
          <FormInput
            label='Include Uppercase'
            name='uppercase'
            onChecked={onChecked}
            form={form.checkboxes}
          />
          <FormInput
            label='Include Numbers'
            name='numbers'
            onChecked={onChecked}
            form={form.checkboxes}
          />
          <FormInput
            label='Include Symbols'
            name='symbols'
            onChecked={onChecked}
            form={form.checkboxes}
          />
          <Divider sx={{ m: '0 0 15px' }} />
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Button
              size='large'
              color='primary'
              variant='contained'
              type='button'
              onClick={generatePassword}>
              Generate Password
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
