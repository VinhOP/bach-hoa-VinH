import { FC } from 'react';
import { Button } from '../../../components';
import { useModal } from '../../../contexts/ModalContext';
import AddProducts from '../Modal/AddProducts';
import Modal from '../../../components/Modal';

const Products: FC = () => {
    const modal = useModal();
    return (
        <>
            <div className="w-full">
                <ul className="flex justify-center">
                    <li className="bg-white w-full rounded mx-8 px-4 py-5">
                        <div className="flex">
                            <div className="w-32">Tên sản phẩm:</div>
                            <div>product name</div>
                        </div>
                        <div className="flex">
                            <div className="w-32">Số lượng:</div>
                            <div>product name</div>
                        </div>
                    </li>
                </ul>

                <div
                    className="w-44 mx-auto bg-lime-400 border rounded m-4"
                    onClick={() => modal.setModal(true)}
                >
                    <Button> Thêm </Button>
                </div>
            </div>
            {modal.modal && (
                <Modal>
                    <AddProducts />
                </Modal>
            )}
        </>
    );
};

export default Products;
