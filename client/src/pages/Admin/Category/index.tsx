import { FC, useEffect, useState } from 'react';
import Popper from '../../../components/Popper';
import ProductsContainer from '../../../components/ProductsContainer';
import Image from '../../../components/Image';
import { Link } from 'react-router-dom';
import { Button } from '../../../components';
import Modal from '../../../components/Modal';
import { useModal } from '../../../contexts/ModalContext';
import AddCategory from '../Modal/AddCategory';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../../hooks/useFetch';
import { setCategories, setIsLoading } from '../../../features/category/categorySlice';
import axios from 'axios';

const Admin: FC = () => {
    const modal = useModal();
    const { value } = useSelector((state: RootState) => state.category);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoading(true);
            const res = await axios.get('/admin/api');
            dispatch(setCategories(res.data));
            setIsLoading(false);
        };
        fetchCategories();
    }, []);

    return (
        <div className="bg-blue-50 w-full">
            <Popper className="p-4">
                {isLoading ? (
                    <div className="w-full my-8 flex justify-center text-3xl">
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                    </div>
                ) : (
                    <ProductsContainer className="min-w-[1000px] w-full">
                        {value.length > 0 &&
                            value.map((category, i) => {
                                const productPath = category.name.replace(/ /g, '-');

                                return (
                                    <li
                                        key={i}
                                        className="flex flex-col justify-center items-center w-fit cursor-pointer"
                                    >
                                        <Link to={productPath} className="w-64 h-36 p-1">
                                            <Image
                                                src={category.image.url}
                                                className="rounded-sm"
                                            />
                                        </Link>
                                        <p>{category.name}</p>
                                    </li>
                                );
                            })}
                    </ProductsContainer>
                )}

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
