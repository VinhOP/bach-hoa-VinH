import { IconSearch } from '@tabler/icons-react';
import React, { FC, ReactNode, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/themes/light.css';
import Image from '../../Image';
import PopperContainer from '../PopperContainer';

interface Props {
    children?: ReactNode;
    variant?: string;
    placeholder?: string;
}
const SearchBar: FC<Props> = ({ variant, placeholder, children }) => {
    const renderResult = (attrs: any) => {
        return (
            <div className="w-[380px]">
                <PopperContainer {...attrs}>
                    <div className="py-[2px]">
                        <p className="font-bold p-[10px] text-[14px]">Tim kiem pho bien</p>

                        <ul className="flex items-center w-fit flex-wrap">
                            <li className="bg-slate-200 py-[6px] px-[8px] m-[3px] rounded cursor-pointer">
                                <p className="text-[#222b45] text-sm">warrior</p>
                            </li>
                            <li className="bg-slate-200 py-[6px] px-[8px] m-[3px] rounded cursor-pointer">
                                <p className="text-[#222b45] text-sm">
                                    nuoc rua chen sunlight chanh
                                </p>
                            </li>
                            <li className="bg-slate-200 py-[6px] px-[8px] m-[3px] rounded cursor-pointer">
                                <p className="text-[#222b45] text-sm">sua </p>
                            </li>
                            <li className="bg-slate-200 py-[6px] px-[8px] m-[3px] rounded cursor-pointer">
                                <p className="text-[#222b45] text-sm">mi goi</p>
                            </li>
                            <li className="bg-slate-200 py-[6px] px-[8px] m-[3px] rounded cursor-pointer">
                                <p className="text-[#222b45] text-sm">mi goi</p>
                            </li>
                        </ul>

                        <p className="font-bold p-[10px] text-[14px]">Uu dai dac biet</p>
                        <ul className="grid grid-cols-2 border gap-[1px] bg-[#eee]">
                            <li className=" bg-white">
                                <div className="flex justify-around w-full items-center py-[10px]">
                                    <p className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                                        vai chi 35k/kg
                                    </p>
                                    <div className="w-[25px] h-[25px]">
                                        <Image />
                                    </div>
                                </div>
                            </li>
                            <li className=" bg-white">
                                <div className="flex justify-around w-full items-center py-[10px]">
                                    <p className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                                        vai chi 35k/kg
                                    </p>
                                    <div className="w-[25px] h-[25px]">
                                        <Image />
                                    </div>
                                </div>
                            </li>
                            <li className=" bg-white">
                                <div className="flex justify-around w-full items-center py-[10px]">
                                    <p className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                                        vai chi 35k/kg
                                    </p>
                                    <div className="w-[25px] h-[25px]">
                                        <Image />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </PopperContainer>
            </div>
        );
    };

    return (
        <div className="relative">
            <Tippy
                render={renderResult}
                interactive
                placement={'bottom'}
                trigger="focusin"
                hideOnClick={false}
                offset={[0, 14]}
            >
                <div className="flex w-96 h-9">
                    <input
                        className="w-full px-4 outline-none text-sm rounded-l-[5px]"
                        placeholder={placeholder}
                        type="text"
                    />
                    <div
                        className="w-12 border-s-[1px] hover:cursor-pointer active:bg-slate-200
                    flex items-center justify-center rounded-r-[5px] bg-white"
                    >
                        <i className="text-gray-300 text-[10px]">
                            <IconSearch />
                        </i>
                    </div>
                </div>
            </Tippy>
        </div>
    );
};

export default SearchBar;
