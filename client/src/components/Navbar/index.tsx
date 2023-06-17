import { FC, useContext, useState } from 'react';
import Button from '../Button';
import { DefaultSearchBar } from '../SearchBar';
import Modal from '../Modal';
import SigninForm from '../SigninForm';
import { useModal } from '../../contexts/ModalContext';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
    const modal = useModal();

    return (
        <>
            <div className="flex px-4 z-10 bg-lime-600 h-16 items-center justify-between fixed top-0 left-0 right-0 px-4]">
                <div className="flex items-center h-full ml-[300px] max-w-[980px]">
                    <Link to="/" className="text-3xl mx-8 text-white font-bold cursor-pointer">
                        Logo
                    </Link>
                    <div className={`mr-8 text-slate-200 text-lg cursor-pointer hover:text-white`}>
                        News
                    </div>
                    <div className="mr-8 text-slate-200 text-lg cursor-pointer hover:text-white">
                        Products
                    </div>
                    <div className="mr-8 text-slate-200 text-lg cursor-pointer hover:text-white">
                        About
                    </div>
                </div>
                <DefaultSearchBar placeholder="Bạn tìm gì?" />
                <div
                    className="rounded bg-slate-200 p-2 hover:bg-slate-100 active:bg-slate-200 
            cursor-pointer"
                    onClick={() => modal.setModal(true)}
                >
                    <Button> Đăng nhập </Button>
                </div>
            </div>
            {modal.modal && (
                <Modal>
                    <SigninForm />
                </Modal>
            )}
        </>
    );
};

export default Navbar;
