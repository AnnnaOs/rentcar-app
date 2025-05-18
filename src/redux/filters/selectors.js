export const selectFilters = state => state.filters;
export const selectBrands = state => state.filters.brands;
export const selectPrices = state => state.filters.prices;
export const selectMileageRange = state => ({
  from: state.filters.mileageFrom,
  to: state.filters.mileageTo,
});
