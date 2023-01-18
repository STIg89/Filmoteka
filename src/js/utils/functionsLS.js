function addToLS(key, value) {
  try {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error(error);
  }
}

function getFromLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
  }
}

function removeFromLS(key) {
  try {
    key;
  } catch (error) {
    console.error(error);
  }
}

export { addToLS, getFromLS, removeFromLS };
