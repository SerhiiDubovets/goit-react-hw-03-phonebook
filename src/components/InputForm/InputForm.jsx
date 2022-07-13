import React from 'react';
import { ReactComponent as Add } from '../icons/add.svg';
import { nanoid } from 'nanoid';
import {
  AddForm,
  AddFormLabel,
  AddFormInput,
  AddFormButton,
  ErrorPhone,
} from './InputForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(1).required(),
  number: yup.number(),
});

const nameId = nanoid();
const phoneId = nanoid();

const error = 'The number must contain only numbers.';

const inputForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  const initialValues = {
    name: '',
    number: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <AddForm>
        <AddFormLabel htmlFor={nameId}>
          Name
          <AddFormInput
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </AddFormLabel>
        <AddFormLabel htmlFor={phoneId}>
          Phone
          <AddFormInput
            id={phoneId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage
            name="number"
            render={() => <ErrorPhone>{error}</ErrorPhone>}
          />
        </AddFormLabel>

        <AddFormButton type="submit">
          Add
          <Add widths="40px" height="40px" />
        </AddFormButton>
      </AddForm>
    </Formik>
  );
};

export default inputForm;
