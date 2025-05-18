// (5000 to 5 000)
export const formatMileage = mileage => {
  return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// Extract price value from string (e.g., "$30" to 30)
export const extractPriceValue = priceString => {
  if (!priceString) return null;
  return parseInt(priceString.replace(/\D/g, ''));
};

// Format address to city/country
export const formatAddress = address => {
  if (!address) return '';

  const parts = address.split(',');
  if (parts.length >= 2) {
    const city = parts[1].trim();
    const country = parts[parts.length - 1].trim();
    return `${city} | ${country}`;
  }
  return address;
};

// Get unique rental conditions
export const parseRentalConditions = conditionsString => {
  if (!conditionsString) return [];

  return conditionsString
    .split('\n')
    .map(condition => condition.trim())
    .filter(Boolean);
};

// Format price with dollar sign
export const formatPrice = price => {
  if (!price) return '';

  // If price already includes $ sign, return as is
  if (price.toString().includes('$')) {
    return price;
  }

  return `$${price}`;
};

// Generate price options for filter
export const generatePriceOptions = () => {
  const options = [];
  for (let i = 10; i <= 500; i += 10) {
    options.push({
      value: i,
      label: `$${i}`,
    });
  }
  return options;
};
