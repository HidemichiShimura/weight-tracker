import { useContext } from "react";

import { IsDataUpdatedContext } from "../context/IsDataUpdatedProvider";

export function useIsDataUpdated() {
  const context = useContext(IsDataUpdatedContext);

  if (context === null) {
    throw Error("Context has not been Provided!");
  }

  return context;
}
