export const formatMileage = mileage => {
  return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const formatPrice = price => {
  if (!price) return '';

  if (price.toString().includes('$')) {
    return price;
  }

  return `$${price}`;
};

export const formatAddress = address => {
  if (!address) return { city: '', country: '' };

  const parts = address.split(',');
  const city = parts[1]?.trim() || '';
  const country = parts[parts.length - 1]?.trim() || '';

  return { city, country };
};

export const generatePriceOptions = () => {
  const options = [];
  for (let i = 30; i <= 80; i += 10) {
    options.push({
      value: i,
      label: `$${i}`,
    });
  }
  return options;
};
