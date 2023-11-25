export type isDataUpdatedType = boolean;

export type setIsDataUpdatedType = (isDataUpdated: isDataUpdatedType) => void;

export type IsDataUpdatedContextType = {
  isDataUpdated: isDataUpdatedType;
  setIsDataUpdated: setIsDataUpdatedType;
};
