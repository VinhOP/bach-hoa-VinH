import { FC, useCallback, useEffect, useLayoutEffect } from 'react';
import Popper from '../../../components/Popper';
import ProductsContainer from '../../../components/ProductsContainer';
import { Button } from '../../../components';
import Modal from '../../../components/Modal';
import { useModal } from '../../../contexts/ModalContext';
import AddCategory from '../Modal/AddCategory';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { setCategories, setIsLoading } from '../../../features/category/categorySlice';
import Category from './Category';
import { getCategoryRequest } from '../../../services/categoryService';

const Admin: FC = () => {
    const modal = useModal();
    const { value, isLoading } = useSelector((state: RootState) => state.category);
    const dispatch = useDispatch();

    const fetchCategories = useCallback(async () => {
        try {
            dispatch(setIsLoading(true));
            const res = await getCategoryRequest();
            dispatch(setCategories(res));
            dispatch(setIsLoading(false));
        } catch (err) {
            console.log(err);
        }
    }, []);

    useLayoutEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="bg-blue-50 w-full relative">
            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 z-30 opacity-40">
                    <div className="absolute text-3xl top-1/2 left-1/2">
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                    </div>
                </div>
            )}
            <Popper className="p-4">
                <ProductsContainer className="min-w-[1000px] w-full">
                    {value.length > 0 &&
                        value.map((category, i) => {
                            return <Category category={category} key={i} />;
                        })}
                </ProductsContainer>
                {/* )} */}

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
