import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (intialValue) => {
  const [value, setValue] = useLocalStorage("values", intialValue);
  return [value, setValue];
};
