import { FC } from 'react';
import Popper from '../../components/Popper';
import ProductsContainer from '../../components/ProductsContainer';
import Image from '../../components/Image';
import { useProducts } from '../../contexts/AdminContext';
import { Link } from 'react-router-dom';

const Admin: FC = () => {
    const products = useProducts();
    return (
        <div className="bg-blue-50 w-full">
            <Popper className="p-4">
                <ProductsContainer className="min-w-[1000px] w-full">
                    {products.map((product) => {
                        const productPath = product.name.replace(/ /g, '-');

                        return (
                            <li
                                key={product.id}
                                className="flex flex-col justify-center items-center w-fit cursor-pointer"
                            >
                                <Link to={productPath} className="w-64 h-36 p-1">
                                    <Image src={product.image} className="rounded-sm" />
                                </Link>
                                <p>{product.name}</p>
                            </li>
                        );
                    })}
                </ProductsContainer>
            </Popper>
        </div>
    );
};

export default Admin;
