const getVisit = async () => {
    const kv = await Deno.openKv();
    const visit = await kv.get(["visits"]);
    return visit.value ?? "0";
  };
  
const setVisit = async (visit) => {
  const kv = await Deno.openKv();
  await kv.set(["visits"], visit);
};

const incrementVisit = async () => {
  let visit = await getVisit();
  visit++;
  await setVisit(visit);
};

export { getVisit, incrementVisit };