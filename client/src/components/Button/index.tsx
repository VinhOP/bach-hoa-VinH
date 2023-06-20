import { FC, ReactNode } from 'react';

interface ButtonProps {
    type?: 'submit' | 'reset' | 'button' | undefined;
    padding?: string;
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, type, padding }) => {
    return (
        <button type={type} className={`w-full h-full ${padding || 'p-2'}`}>
            {children}
        </button>
    );
};

export default Button;
