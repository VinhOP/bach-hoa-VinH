import { FC, ReactNode } from 'react';

interface IPopperProps {
    children: ReactNode;
    className?: string;
}

const Popper: FC<IPopperProps> = ({ children, className }) => {
    return <div className={`w- h-full bg-white shadow-md rounded-md ${className}`}>{children}</div>;
};

export default Popper;
