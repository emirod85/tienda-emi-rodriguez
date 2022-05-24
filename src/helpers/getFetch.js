export const getFetch = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id
        ? productos.find((productos) => productos.id === id)
        : productos;
      resolve(query);
    });
  }, 2000);
};
