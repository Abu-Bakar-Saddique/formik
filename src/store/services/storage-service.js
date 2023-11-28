export const addItem = (value) => {
    console.log(value);
    localStorage.setItem("token", value['access_token']);
  };
  
export const removeItem = (key) => {
localStorage.removeItem(key);
};
