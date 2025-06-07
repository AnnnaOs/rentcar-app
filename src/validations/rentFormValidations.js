import * as Yup from 'yup';

const rentFormValidations = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  dateRange: Yup.array()
    .of(Yup.date().nullable())
    .test(
      'both-dates-selected',
      'Please select a valid date range',
      value => value && value[0] && value[1]
    )
    .required('Booking date is required'),
  comment: Yup.string().max(500, 'Comment is too long'),
});

export default rentFormValidations;
