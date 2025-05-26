import { components } from 'react-select';

const SingleValue = ({ data, ...props }) => {
  if (!data || data.value === '') return null;

  return (
    <components.SingleValue {...props}>
      To&nbsp;${data.label}
    </components.SingleValue>
  );
};

export default SingleValue;
