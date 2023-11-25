import { createContext, useState, ReactNode } from "react";

import { IsDataUpdatedContextType } from "./IsDataUpdatedProvider.d";

export const IsDataUpdatedContext = createContext<IsDataUpdatedContextType>({
  isDataUpdated: false,
  setIsDataUpdated: () => {},
});

const IsDataUpdatedProvider = ({ children }: { children: ReactNode }) => {
  const [isDataUpdated, setIsDataUpdated] = useState(false);
  const contextValue: IsDataUpdatedContextType = {
    isDataUpdated: isDataUpdated,
    setIsDataUpdated: setIsDataUpdated,
  };

  return (
    <IsDataUpdatedContext.Provider value={contextValue}>
      {children}
    </IsDataUpdatedContext.Provider>
  );
};

export default IsDataUpdatedProvider;
