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

export const calPQV = (data) => {
  const preset = splitVoting(data);

  let result = 0;
  preset.forEach((element) => {
    if (Number(element) >= 0) {
      result +=
        Math.abs(Number(element)) * Math.sqrt(Math.abs(Number(element)));
    } else {
      result -=
        Math.abs(Number(element)) * Math.sqrt(Math.abs(Number(element)));
    }
    console.log("res: ", result);
  });

  return result;
};

export const calSumVoting = (data) => {
  const preset = splitVoting(data);

  let result = 0;
  preset.forEach((element) => {
    result += Math.abs(Number(element)) * Math.sqrt(Math.abs(Number(element)));
  });

  return result;
};

export const splitVoting = (data) => {
  const tmp = data.replace(/(\s*)/g, "");
  const result = tmp.split(",");

  return result;
};
