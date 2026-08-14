import React, { useState } from "react";

function useStorage(defaultValue) {
  const [first, setFirst] = useState(defaultValue);

  const storeItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const changeValue = (value) => {
    setFirst(value);
  };

  return [first, changeValue, storeItem];
}

export default useStorage;
