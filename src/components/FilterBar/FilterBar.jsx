import clsx from 'clsx';
import Select from 'react-select';
import { NumericFormat } from 'react-number-format';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBrands } from '../../redux/cars/operations';
import { setFilters } from '../../redux/filters/slice';
import { selectBrands } from '../../redux/cars/selectors';
import { resetPage, resetCars } from '../../redux/cars/slice';
import { generatePriceOptions } from '../../helpers/formatters';

import DropdownIndicator from '../DropdownIndicator/DropdownIndicator';
import SingleValue from './SingleValue';
import s from './FilterBar.module.css';

const customSelectStyles = {
  control: base => ({
    ...base,
    borderRadius: '12px',
    width: '204px',
    height: '44px',
    background: '#f7f7f7',
    border: 'none',
    boxShadow: 'none',
  }),
  placeholder: base => ({
    ...base,
    color: '#101828',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.25',
  }),
  indicatorSeparator: base => ({
    ...base,
    display: 'none',
  }),
  menu: base => ({
    ...base,
    border: '1px solid #f7f7f7',
    borderRadius: '12px',
    width: '204px',
    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
    backgroundColor: '#ffffff',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '2px',
    paddingRight: '8px',
  }),
  menuList: base => ({
    ...base,
    overflowY: 'auto',
    overflowX: 'hidden',

    '&::-webkit-scrollbar': {
      width: '8px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#dadde1',
      borderRadius: '10px',
    },
  }),
  option: (base, state) => ({
    ...base,
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.25',
    color: state.isSelected ? '#101828' : '#8d929a',
    backgroundColor: state.isSelected ? 'transparent' : 'transparent',
    '&:hover': {
      color: '#101828',
      backgroundColor: 'transparent',
    },
  }),
};

const FilterBarCar = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(selectBrands);
  const [searchParams, setSearchParams] = useSearchParams();

  const [formValues, setFormValues] = useState({
    brand: searchParams.get('brand') ?? '',
    price: searchParams.get('price') ?? '',
    mileageFrom: searchParams.get('mileageFrom') ?? '',
    mileageTo: searchParams.get('mileageTo') ?? '',
  });

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const priceOptions = generatePriceOptions();

  const brandOptions = carBrands.map(brand => ({
    value: brand,
    label: brand,
  }));

  const priceSelectOptions = priceOptions.map(price => ({
    value: price.value.toString(),
    label: `${price.value}`,
  }));

  const handleSelectChange = (selected, { name }) => {
    setFormValues(prev => ({
      ...prev,
      [name]: selected ? selected.value : '',
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(resetCars());
    dispatch(resetPage());
    dispatch(setFilters(formValues));

    const filteredParams = {};
    if (formValues.brand) filteredParams.brand = formValues.brand;
    if (formValues.price) filteredParams.price = formValues.price;
    if (formValues.mileageFrom)
      filteredParams.mileageFrom = formValues.mileageFrom;
    if (formValues.mileageTo) filteredParams.mileageTo = formValues.mileageTo;
    setSearchParams(filteredParams);
  };

  return (
    <section className={s.filterBar}>
      <form className={s.filterBarForm} onSubmit={handleSubmit}>
        <div className={s.filterSelectWrap}>
          <label className={s.label} htmlFor="brand">
            Car brand
          </label>
          <Select
            inputId="brand"
            name="brand"
            options={brandOptions}
            isClearable
            placeholder="Choose a brand"
            value={
              formValues.brand
                ? brandOptions.find(opt => opt.value === formValues.brand)
                : null
            }
            onChange={handleSelectChange}
            styles={customSelectStyles}
            components={{ DropdownIndicator }}
          />
        </div>

        <div className={s.filterSelectWrap}>
          <label className={s.label} htmlFor="price">
            Price / 1 hour
          </label>
          <Select
            inputId="price"
            name="price"
            options={priceSelectOptions}
            isClearable
            placeholder="Choose a price"
            value={
              formValues.price
                ? priceSelectOptions.find(opt => opt.value === formValues.price)
                : null
            }
            onChange={handleSelectChange}
            styles={customSelectStyles}
            components={{ DropdownIndicator, SingleValue }}
          />
        </div>

        <div className={s.filterMileageWrap}>
          <label className={s.label}>Car mileage / km</label>
          <div className={s.mileageInputs}>
            <NumericFormat
              id="mileageFrom"
              name="mileageFrom"
              placeholder="From"
              prefix="From "
              thousandSeparator=","
              autoComplete="off"
              allowNegative={false}
              value={formValues.mileageFrom ?? ''}
              className={clsx(s.inputFrom, s.from)}
              onValueChange={({ value }) =>
                setFormValues(prev => ({ ...prev, mileageFrom: value }))
              }
            />
            <NumericFormat
              id="mileageTo"
              name="mileageTo"
              placeholder="To"
              prefix="To "
              thousandSeparator=","
              autoComplete="off"
              allowNegative={false}
              value={formValues.mileageTo ?? ''}
              className={clsx(s.inputTo, s.to)}
              onValueChange={({ value }) =>
                setFormValues(prev => ({ ...prev, mileageTo: value }))
              }
            />
          </div>
        </div>

        <button type="submit" className={clsx(s.searchButton, 'mainBtn')}>
          Search
        </button>
      </form>
    </section>
  );
};

export default FilterBarCar;
