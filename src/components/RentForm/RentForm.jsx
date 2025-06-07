import { Field, Form, Formik } from 'formik';
import rentFormValidations from '../../validations/rentFormValidations.js';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import clsx from 'clsx';

import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import s from './RentForm.module.css';

const RentForm = () => {
  const btnRef = useRef(null);

  const initialValues = {
    name: '',
    email: '',
    dateRange: [null, null],
    comment: '',
  };

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
        validationSchema={rentFormValidations}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched, setFieldTouched }) => (
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
            <label className={s.label} htmlFor="dateRange">
              <CustomDatePicker
                value={values.dateRange}
                onChange={update => setFieldValue('dateRange', update)}
                onBlur={() => setFieldTouched('dateRange', true)}
                error={touched.dateRange && errors.dateRange}
              />
              {touched.dateRange && errors.dateRange && (
                <span className={s.error}>{errors.dateRange}</span>
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
