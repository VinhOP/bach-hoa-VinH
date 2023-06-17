import { FC, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Slideshow from '../../components/Slideshow';
import { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar';
import Image from '../../components/Image';
import { Thumbs } from 'react-responsive-carousel';

interface Props {
    children?: ReactNode;
}

const DefaultLayout: FC<Props> = ({ children }) => {
    return (
        <div className="mx-[50px] w-[1200px]">
            <Navbar />
            <Sidebar />
            <aside className="w-[980px] float-right ">
                <Slideshow />
                <div className="my-[10px] bg-white">
                    <label className="p-[10px]">Nhóm hàng thường mua</label>
                    <ul className="flex">
                        <li className="flex flex-col mb-[10px]">
                            <div className="w-11 h-11 mx-[26.5px] mb-[5px]">
                                <Image />
                            </div>
                            <label className="px-[5px] text-center" htmlFor="">
                                Thịt heo
                            </label>
                        </li>
                        <li className="flex flex-col mb-[10px]">
                            <div className="w-11 h-11 mx-[26.5px] mb-[5px]">
                                <Image />
                            </div>
                            <label className="px-[5px] text-center" htmlFor="">
                                Thịt heo
                            </label>
                        </li>
                        <li className="flex flex-col mb-[10px]">
                            <div className="w-11 h-11 mx-[26.5px] mb-[5px]">
                                <Image />
                            </div>
                            <label className="px-[5px] text-center" htmlFor="">
                                Thịt heo
                            </label>
                        </li>
                    </ul>
                </div>
                {children}
            </aside>
        </div>
    );
};

export default DefaultLayout;
