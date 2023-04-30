import { withStoragelistener } from "./withStorageListen";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <diiv>
        <p>Up!! paso algo</p>
        <button onClick={() => toggleShow(false)}>Reload</button>
      </diiv>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStoragelistener(ChangeAlert);

export { ChangeAlertWithStorageListener };
