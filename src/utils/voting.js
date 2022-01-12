export const calLinear = (data) => {
  const preset = splitVoting(data);

  let result = 0;
  preset.forEach((element) => {
    result += Number(element);
  });

  return result;
};
export const calQV = (data) => {
  const preset = splitVoting(data);

  let result = 0;
  preset.forEach((element) => {
    result += Math.sqrt(Number(element));
  });

  return result;
};
export const calCivil = (data) => {
  const preset = splitVoting(data);
};
export const calPQV = (data) => {
  const preset = splitVoting(data);
};

export const splitVoting = (data) => {
  const tmp = data.replace(/(\s*)/g, "");
  const result = tmp.split(",");

  return result;
};
