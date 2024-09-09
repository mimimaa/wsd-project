let store = 0;

const getStore = () => {
  console.log(`Getting store value: ${store}`); 
  return store;
};

const setStore = (s) => {
  console.log(`Setting store to: ${s}`); 
  store = s; 
};

export { setStore, getStore };