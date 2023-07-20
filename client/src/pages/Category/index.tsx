import { FC } from 'react';
import Image from '../../components/Image';
import ProductCard from '../../components/ProductCard';
import ProductsContainer from '../../components/ProductsContainer';
import CateSearchBar from '../../components/SearchBar/CateSearchBar';

const Category: FC = () => {
    return (
        <div className={''}>
            <div className="w-full bg-white p-1">
                <div className="flex justify-between items-center">
                    <CateSearchBar placeholder="Tìm thương hiệu" />
                    <ul className="flex w-full justify-center">
                        <li>
                            <a href="">
                                <div className="w-[65px] h-[40px] my-[5px] mx-[16.5px]">
                                    <Image />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="w-[65px] h-[40px] my-[5px] mx-[16.5px]">
                                    <Image />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="w-[65px] h-[40px] my-[5px] mx-[16.5px]">
                                    <Image />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="w-[65px] h-[40px] my-[5px] mx-[16.5px]">
                                    <Image />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="w-[65px] h-[40px] my-[5px] mx-[16.5px]">
                                    <Image />
                                </div>
                            </a>
                        </li>
                    </ul>
                    <span className="cursor-pointer flex items-center h-full">
                        <p className="text-[13px] text-[#288ad6]">Xem thêm</p>
                    </span>
                </div>
                <div className="hidden"> more brand</div>
            </div>
            <div className="py-[5px] my-[5px] flex items-center">
                <input type="checkbox" id="sales" name="khuyen mai" />
                <label htmlFor="sales" className="text-[#288ad6] ml-2">
                    Có quanity product khuyến mãi
                </label>
            </div>
            <ProductsContainer>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductsContainer>
        </div>
    );
};

export default Category;
