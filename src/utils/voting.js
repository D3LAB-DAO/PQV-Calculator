export const collapseNavbar = () => {
  var element = document.getElementById("navbarNav");
  element.classList.remove("show");
};

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
    if (Number(element) >= 0) {
      result += Math.sqrt(Math.abs(Number(element)));
    } else {
      result -= Math.sqrt(Math.abs(Number(element)));
    }
  });

  return result;
};

export const calSybil = (data) => {
  const preset = splitVoting(data);

  let result = 0;

  preset.forEach((element) => {
    result += Number(element);
  });

  return result;
};

export const calEQV = (data, sumVoting) => {
  const preset = splitVoting(data);

  let result = 0;
  const e = 1;

  preset.forEach((element) => {
    if (sumVoting !== 0) {
      if (Number(element) >= 0) {
        result +=
          Math.pow(Math.abs(Number(element)), e) *
          Math.sqrt(Math.abs(Number(element))) / sumVoting;
      } else {
        result -=
          Math.pow(Math.abs(Number(element)), e) *
          Math.sqrt(Math.abs(Number(element))) / sumVoting;
      }
    }
  });

  return result;
};

export const calPQV = (data, sumVoting) => {
  const preset = splitVoting(data);

  let result = 0;
  const e = 1;

  preset.forEach((element) => {
    if (sumVoting !== 0) {
      let div = Math.pow(Math.abs(Number(element)), e) / sumVoting;
      if (Math.random() < div) {
        if (Number(element) >= 0) {
          result += Math.sqrt(Math.abs(Number(element)));
        } else {
          result -= Math.sqrt(Math.abs(Number(element)));
        }
      }
    }
  });

  return result;
};

export const calSumVoting = (data) => {
  const preset = splitVoting(data);

  let result = 0;

  preset.forEach((element) => {
    result += Math.abs(Number(element));
  });

  return result;
};

export const splitVoting = (data) => {
  const tmp = data.replace(/(\s*)/g, "");
  const result = tmp.split(",");

  return result;
};
