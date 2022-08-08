import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext(null);

export const useModalContext = () => useContext(ModalContext);

export function ModalContextProvider({ children }) {
  const [displayModal, setDisplayModal] = useState(false);

  function toggleModal() {
    setDisplayModal((prev) => !prev);
  }

  useEffect(() => {
    if (displayModal) {
      document.body.classList += " modal-open";
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [displayModal]);

  const values = {
    displayModal,
    toggleModal,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
}
