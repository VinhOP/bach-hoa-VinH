import { Children, FC, ReactNode, cloneElement } from 'react';
import Popper from '../../components/Popper';
import { Button } from '../../components';
import { Outlet } from 'react-router-dom';

interface IAdminLayoutProps {
    children?: ReactNode;
}
const AdminLayout: FC<IAdminLayoutProps> = () => {
    return (
        <div className="flex h-[800px] min-h-[600px] min-w-[800px]">
            <div className="min-w-[260px] bg-lime-600 h-full fixed">
                <h1 className="text-3xl text-center font-bold my-4"> Menu </h1>
                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center w-full ml-[260px]">
                <div
                    className="fixed top-0 z-40  bg-white left-[260px] right-0 h-[70px]
                flex items-center justify-center border-b-2"
                >
                    <h1 className="text-center font-bold text-4xl"> Quản lý sản phẩm </h1>
                </div>
                <div className="w-full h-[600px] flex justify-center mt-[70px]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
