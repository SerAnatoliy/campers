export const isFavourite = (id, favorites) => favorites.some(item => item._id === id);
