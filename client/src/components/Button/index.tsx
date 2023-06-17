import { FC, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
    return <button className="w-full h-full"> {children} </button>;
};

export default Button;
