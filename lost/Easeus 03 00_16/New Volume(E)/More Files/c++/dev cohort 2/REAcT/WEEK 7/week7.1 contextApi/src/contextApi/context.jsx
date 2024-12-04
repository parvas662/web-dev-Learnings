import { createContext } from "react";
export const CountContext = createContext({
    count: 0, // Default value for `count`
  setCount: () => {}, // Default is an empty function
});
