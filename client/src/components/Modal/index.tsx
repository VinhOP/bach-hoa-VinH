import { FC, ReactNode, useEffect } from 'react';

interface Props {
    children?: ReactNode;
}

const Modal: FC<Props> = (props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, []);

    return (
        <div
            className="fixed w-full top-0 bottom-0 left-0 right-0 z-40 
        bg-[rgba(0,0,0,0.4)] flex items-center overscroll-y-none overscro"
        >
            {props.children}
        </div>
    );
};

export default Modal;
