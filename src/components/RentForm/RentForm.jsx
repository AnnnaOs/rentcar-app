import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import clsx from 'clsx';

import s from './RentForm.module.css';

const RentForm = () => {
  const btnRef = useRef(null);

  const initialValues = {
    name: '',
    email: '',
    date: null,
    comment: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    date: Yup.date().required('Booking date is required'),
    comment: Yup.string().max(500, 'Comment is too long'),
  });

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    toast.success('Success! Your car is almost yours.');
    btnRef.current?.blur();
  };

  return (
    <section className={s.rentForm}>
      <h3 className={s.title}>Book your car now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className={s.form}>
            <label className={s.label} htmlFor="name">
              <Field
                className={s.field}
                type="text"
                name="name"
                id="name"
                placeholder="Name*"
              />
              {touched.name && errors.name && (
                <span className={s.error}>{errors.name}</span>
              )}
            </label>
            <label className={s.label} htmlFor="email">
              <Field
                className={s.field}
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
              />
              {touched.email && errors.email && (
                <span className={s.error}>{errors.email}</span>
              )}
            </label>
            <label className={s.label} htmlFor="date">
              <DatePicker
                id="date"
                name="date"
                selected={values.date}
                onChange={date => setFieldValue('date', date)}
                minDate={new Date()}
                placeholderText="Booking date*"
                className={clsx(s.field, s.dateInput)}
                dateFormat="dd.MM.yyyy"
              />
              {touched.date && errors.date && (
                <span className={s.error}>{errors.date}</span>
              )}
            </label>
            <label className={s.label} htmlFor="comment">
              <Field
                as="textarea"
                className={clsx(s.field, s.textarea)}
                name="comment"
                id="comment"
                placeholder="Comment"
              />
              {touched.comment && errors.comment && (
                <span className={s.error}>{errors.comment}</span>
              )}
            </label>

            <button
              type="submit"
              className={clsx(s.button, 'mainBtn')}
              ref={btnRef}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default RentForm;
