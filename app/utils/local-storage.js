// globals localStorage
const DISABLED = (function() {
  const TEST_KEY = "__TEST_KEY__";
  try {
      localStorage.setItem(TEST_KEY, TEST_KEY);
      localStorage.removeItem(TEST_KEY);
      return false;
  } catch(e) {
      return true;
  }
})();

const storage = {
  getItem(key) {
    if (DISABLED) {
      return;
    }

    return localStorage.getItem(key);
  },

  setItem(key, value) {
    if (DISABLED) {
      return;
    }

    return localStorage.setItem(key, value);
  },

  removeItem(key) {
    if (DISABLED) {
      return;
    }

    return localStorage.removeItem(key);
  }
};

export default storage;
