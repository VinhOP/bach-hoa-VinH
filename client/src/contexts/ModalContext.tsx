import React, { FC, ReactNode, useContext, useState } from 'react';
import { createContext } from 'react';

interface Props {
    children: ReactNode;
}

interface IModal {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const value = {
    modal: false,
    setModal: () => {},
};

const ModalContext = createContext<IModal>(value);

export const useModal = () => useContext(ModalContext);

const ModalProvider: FC<Props> = ({ children }) => {
    const [modal, setModal] = useState<boolean>(false);

    return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
