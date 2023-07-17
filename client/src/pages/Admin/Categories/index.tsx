import { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
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
import { faEllipsis, faSpinner } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../../hooks/useFetch';
import { setCategories, setIsLoading } from '../../../features/category/categorySlice';
import axios from 'axios';
import Category from './Category';

const Admin: FC = () => {
    const modal = useModal();
    const { value, isLoading } = useSelector((state: RootState) => state.category);
    const dispatch = useDispatch();

    const controller = new AbortController();
    const fetchCategories = useCallback(async () => {
        try {
            dispatch(setIsLoading(true));
            const res = await axios.get('/admin/api', { signal: controller.signal });
            dispatch(setCategories(res.data));
            dispatch(setIsLoading(false));
        } catch (err) {
            console.log(err);
        }
    }, []);

    useLayoutEffect(() => {
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
                                return (
                                    <Category
                                        category={category}
                                        key={i}
                                        fetchCategories={fetchCategories}
                                    />
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
