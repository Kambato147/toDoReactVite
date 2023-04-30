import { useState } from "react";

function withStoragelistener(WappedComponent) {
  return function WappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODO_V1") {
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return <WappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { withStoragelistener };
