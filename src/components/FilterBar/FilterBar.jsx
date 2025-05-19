import React, { useState } from 'react';
import s from './FilterBar.module.css';

const carBrands = ['Aston Martin', 'Audi', 'BMW', 'Bentley', 'Buick', 'Chevrolet', 'Chrysler', 'GMC', 'HUMMER'];

const prices = [30, 40, 50, 60, 70, 80];

const FilterBar = ({ onSearch }) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleSearch = () => {
    onSearch?.({ brand: selectedBrand, price: selectedPrice, mileageFrom, mileageTo });
  };

  return (
    <div className={s.filterBar}>
      <div className={s.filterGroup}>
        <label>Car brand</label>
        <select value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
          <option value="">Choose a brand</option>
          {carBrands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={s.filterGroup}>
        <label>Price/ 1 hour</label>
        <select value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)}>
          <option value="">Choose a price</option>
          {prices.map(price => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>

      <div className={s.filterGroup}>
        <label>Car mileage / km</label>
        <div className={s.mileageInputs}>
          <input
            type="number"
            placeholder="From"
            value={mileageFrom}
            onChange={e => setMileageFrom(e.target.value)}
            className={s.inputFrom}
            aria-label="Starting mileage"
          />
          <div className={s.divider}></div>
          <input
            type="number"
            placeholder="To"
            value={mileageTo}
            onChange={e => setMileageTo(e.target.value)}
            className={s.inputTo}
            aria-label="Ending mileage"
          />
        </div>
      </div>

      <button className={s.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterBar;
