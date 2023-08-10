// to access the data from localstorage

const accessData = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return undefined;
  }
};

// to save the data to the localStorage

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { accessData, saveData };
