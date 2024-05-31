export const useLocalStorage = () => {
  const getItemFromLocalStorage = (key: string) => {
    return localStorage.getItem(key);
  };

  const setItemToLocalStorage = (key: string, item: string) => {
    localStorage.setItem(key, item);
  };

  const removeItemFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    getItemFromLocalStorage,
    setItemToLocalStorage,
    removeItemFromLocalStorage,
  };
};
