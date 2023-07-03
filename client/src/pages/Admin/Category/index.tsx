import { FC, useEffect, useState } from 'react';
import Popper from '../../../components/Popper';
import ProductsContainer from '../../../components/ProductsContainer';
import Image from '../../../components/Image';
import { useProducts } from '../../../contexts/AdminContext';
import { Link } from 'react-router-dom';
import { Button } from '../../../components';
import Modal from '../../../components/Modal';
import { useModal } from '../../../contexts/ModalContext';
import AddCategory from '../Modal/AddCategory';
import axios from 'axios';

const Admin: FC = () => {
    const products = useProducts();

    const modal = useModal();

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

                <div
                    className="w-44 mx-auto my-8 bg-lime-400 border rounded m-4"
                    onClick={() => modal.setModal(true)}
                >
                    <Button> Thêm loại </Button>
                </div>
            </Popper>
            {modal.modal && (
                <Modal>
                    <AddCategory />
                </Modal>
            )}
        </div>
    );
};

export default Admin;
