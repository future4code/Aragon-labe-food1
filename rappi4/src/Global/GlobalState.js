import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
};
