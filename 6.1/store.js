const getStore = async () => {
  const kv = await Deno.openKv();
  const store = await kv.get(["store"]);
  //console.log(store.value);
  return store.value ?? "Nothing";
};

const setStore = async (store) => {
  const kv = await Deno.openKv();
  await kv.set(["store"], store);
  console.log(store);
};

export { getStore, setStore };