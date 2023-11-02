import { useCallback, useState } from 'react';
import {
  alphabet,
  filterSelectedKeys,
  getRandomFromArray,
} from '../helpers/alphabet';

export const useForm = (formInitialState) => {
  const [form, setForm] = useState(formInitialState);

  const generatePassword = useCallback(() => {
    const filteredKeys = filterSelectedKeys(alphabet, form.checkboxes);
    const generatedPassword = Array.from(
      { length: form.passwordLength },
      (v, i) => {
        const selectedKey = getRandomFromArray(filteredKeys);
        const selectedAlphabet = alphabet[selectedKey] || [];

        return getRandomFromArray(selectedAlphabet);
      }
    );

    setForm({ ...form, password: generatedPassword.join('') });
  }, [form, setForm]);

  const onChecked = ({ target: { name, checked } }) => {
    const updatedCheckboxes = { ...form.checkboxes };
    updatedCheckboxes[name] = checked;

    const canBeUpdated = Object.keys(updatedCheckboxes).some(
      (box) => updatedCheckboxes[box]
    );
    if (canBeUpdated) {
      setForm({
        ...form,
        checkboxes: { ...updatedCheckboxes },
      });
    }
  };

  return { form, setForm, generatePassword, onChecked };
};
