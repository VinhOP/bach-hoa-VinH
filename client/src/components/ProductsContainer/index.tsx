import React, { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const ProductsContainer: FC<Props> = ({ children }) => {
    return <div className="grid grid-cols-4 gap-4">{children}</div>;
};

export default ProductsContainer;
