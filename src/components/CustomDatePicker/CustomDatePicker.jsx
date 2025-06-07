import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './CustomDatePicker.css';

const CustomDatePicker = ({ value, onChange, onBlur, error }) => {
  const [startDate, endDate] = value;

  return (
    <>
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        onBlur={onBlur}
        calendarStartDay={1}
        placeholderText="Booking date*"
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        className="custom-datepicker"
        calendarClassName="custom-calendar"
        popperClassName="custom-popper"
        showPopperArrow={true}
        isClearable
        formatWeekDay={nameOfDay => nameOfDay.slice(0, 3).toUpperCase()}
      />
      {error && <span className="datepicker-error">{error}</span>}
    </>
  );
};

export default CustomDatePicker;
