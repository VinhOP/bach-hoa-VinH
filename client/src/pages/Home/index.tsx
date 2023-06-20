import React, { FC, ReactNode, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import CateBar from '../../components/CateBar';
import ProductsContainer from '../../components/ProductsContainer';

interface Props {
    children?: ReactNode;
}

const Home: FC = () => {
    // const [value, setValue] = React.useState(0);

    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    // };

    return (
        <div className="w-full">
            <CateBar
                title="Sản phẩm khuyến mãi"
                titleColor="text-[#ff7b01]"
                bgColor="bg-[#fcf2e7]"
            />
            <ProductsContainer>
                <ProductCard />
                <ProductCard />
            </ProductsContainer>

            <div> Load more</div>

            {/* --- */}
            <CateBar
                title="Thịt, cá, trứng hải sản"
                bgColor="bg-[#6f9972]"
                titleColor="text-white"
            />
            <ProductsContainer>
                <ProductCard />
                <ProductCard />
            </ProductsContainer>

            <div> Load more</div>

            {/* --- */}
            <CateBar title="rau, củ nấm, trái cây" bgColor="bg-[#6f9972]" titleColor="text-white" />
            <ProductsContainer>
                <ProductCard />
                <ProductCard />
            </ProductsContainer>

            <div> Load more</div>

            <div className="">
                <div className="flex before:border-s-4 before:border-[#008848]">
                    <h2
                        className="before:content-[''] pt-[7px] px-[10px] pb-[12px] w-full uppercase 
                        text-[#4a4a4a] font-semibold leading-[1.3em]"
                    >
                        group title
                    </h2>
                </div>
                <ProductsContainer>
                    <ProductCard />
                    <ProductCard />
                </ProductsContainer>
            </div>

            <div className="">
                <div className="flex before:border-s-4 before:border-[#008848]">
                    <h2
                        className="before:content-[''] pt-[7px] px-[10px] pb-[12px] w-full uppercase 
                        text-[#4a4a4a] font-semibold leading-[1.3em]"
                    >
                        group title
                    </h2>
                </div>
                <ProductsContainer>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductsContainer>
            </div>
        </div>
    );
};

export default Home;
