import { FC } from 'react';
import Image from '../Image';

interface Props {
    img?: string;
    title?: string;
    price?: string;
    oldPrice?: string;
    discount?: string;
}

const ProductCard: FC<Props> = ({ img, title, price, oldPrice, discount }) => {
    return (
        <div className="w-[245px] bg-white p-2">
            <div className="flex justify-center">
                <div className="w-[160px] h-[160px] my-[33.5px]">
                    <Image />
                </div>
            </div>
            <p className="pt-4 mb-[7px] text-[13px]">{}</p>
            <div className="flex items-center text-xs">
                <p className="text-[#b10e0e]">186.000d</p>
                <p className="text-[#757575] line-through text-[13px] font-light ml-1">300.000d</p>
                <div className="bg-[#de2000] p-1 rounded-md ml-1">
                    <p className="font-semibold text-white">25%</p>
                </div>
            </div>
            <button className="py-[10px] mt-[30px] text-center w-full border-lime-500 border rounded-md">
                Chọn mua
            </button>
        </div>
    );
};

export default ProductCard;
