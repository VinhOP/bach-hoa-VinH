import { FC } from 'react';
import { Button } from '../../../components';
import { useModal } from '../../../contexts/ModalContext';
import AddProducts from '../AddProducts';
import Modal from '../../../components/Modal';

const ProductsType: FC = () => {
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
                <div className="flex justify-center">
                    <div
                        className="w-44 bg-lime-400 border rounded m-4"
                        onClick={() => modal.setModal(true)}
                    >
                        <Button> Thêm sản phẩm </Button>
                    </div>
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

export default ProductsType;
