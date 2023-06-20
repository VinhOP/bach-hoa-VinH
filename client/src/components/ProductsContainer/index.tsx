import React, { FC, ReactNode } from 'react';

interface Props {
    className?: string;
    children: ReactNode;
}

const ProductsContainer: FC<Props> = ({ children, className }) => {
    return <ul className={`grid grid-cols-4 ${className}`}>{children}</ul>;
};

export default ProductsContainer;
