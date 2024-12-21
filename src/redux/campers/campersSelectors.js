export const selectCampers = (state) => state.campers.campers.items;
export const selectNumberCampers = (state) => state.campers.campers.total;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectFavoriteCampers = (state) => state.campers.favoriteCampers;
export const selectChoosenCamper = state => state.campers.choosenCamper;
export const selectLoaded = state => state.campers.loaded;
