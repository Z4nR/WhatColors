const userData = (data, isClient) => {
  const date = new Date().toLocaleString("id-ID", { hour12: false });
  const name = isClient === true ? `Inisial ${data?.fullName}` : data?.fullName;
  const age = data?.age;
  const gender = data?.gender;
  const device = data?.device;
  const type = data?.testType;

  return {
    date,
    name,
    age,
    gender,
    device,
    type,
  };
};

export { userData };
