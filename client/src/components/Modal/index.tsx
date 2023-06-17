import { FC, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

const Modal: FC<Props> = (props) => {
    return (
        <div
            className="fixed top-0 bottom-0 left-0 right-0 z-40 
        bg-[rgba(0,0,0,0.4)] flex items-center "
        >
            {props.children}
        </div>
    );
};

export default Modal;
