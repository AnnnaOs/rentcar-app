export const selectCars = state => state.cars.cars || [];
export const selectCarCurrent = state => state.cars.carCurrent;
export const selectIsLoading = state => state.cars.isLoading;
export const selectIsError = state => state.cars.isError;
export const selectPage = state => state.cars.page;
export const selectTotalCars = state => state.cars.totalCars;
export const selectTotalPages = state => state.cars.totalPages;
