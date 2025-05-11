export const debounce = (func: Function, wait: number): Function => {
  let id: string | number | NodeJS.Timeout | null | undefined = null;

  return function debounced(this: Function, ...args: any[]) {
    clearTimeout(id as string);
    console.log("called debounced");
    id = setTimeout(() => {
      func.call(this, ...args);
    }, wait);
  };
};
