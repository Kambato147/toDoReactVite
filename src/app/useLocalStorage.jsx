import React from "react";

function useLocalStorage(itemName, initilaValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initilaValue);

  // simular una consulta a una API
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initilaValue));
          parsedItem = initilaValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
        setSincronizedItem(true);
      }
    }, 3000);
  }, [sincronizedItem]);

  // persistir la informacion
  const saveItem = (newItem) => {
    try {
      const stringItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  // sincronizacion
  const syncItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return { item, saveItem, loading, error, syncItem };
}

export { useLocalStorage };
