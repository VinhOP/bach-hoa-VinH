import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const sx = classNames.bind(styles);

const Sidebar = () => {
    const [selectedCate, setSelectedCate] = useState<Number | void>();
    const categories = [
        {
            name: 'khuyen mai hot',
        },
        {
            name: 'category 1',
            children: [
                {
                    name: 'sub category 1',
                },
            ],
        },
        {
            name: 'category 2',
            children: [
                {
                    name: 'sub category 2',
                },
            ],
        },
        {
            name: 'category 3',
            children: [
                {
                    name: 'sub category 3',
                },
                {
                    name: 'sub category 3',
                },
            ],
        },
    ];

    const handleOpenSubMenu = (i: any) => {
        if (i === selectedCate) {
            setSelectedCate();
            return;
        }
        setSelectedCate(i);
    };

    return (
        <div className="w-[210px] z-20 fixed bg-white h-[calc(100vh-10px)] bottom-0">
            <div className="w-full">
                <div className="text-center bg-lime-500 p-3 mb-[10px]"> Danh mục sản phẩm </div>
                <ul>
                    {categories.map((cate, i) => {
                        return (
                            <li key={i} className="mb-[22px] pl-[7px]">
                                <div
                                    className={sx('category')}
                                    onClick={() => handleOpenSubMenu(i)}
                                >
                                    {cate.children && (
                                        <>
                                            <span
                                                className={sx(
                                                    selectedCate === i ? 'arrow-up' : 'arrow-down',
                                                )}
                                            ></span>
                                            <span className={sx('dropdown-arrow')}></span>
                                        </>
                                    )}
                                    <p className="text-xs/[1.4] text-[#1d1d1d] uppercase font-semibold">
                                        {cate.name}
                                    </p>
                                </div>
                                {cate.children &&
                                    selectedCate === i &&
                                    cate.children.map((subCate, i) => {
                                        return (
                                            <div key={i} className="py-[6px] pr-[7px] pl-[10px]">
                                                <p
                                                    className="text-xs text-[#1d1d1d] whitespace-nowrap
                                                text-ellipsis overflow-hidden"
                                                >
                                                    {subCate.name}
                                                </p>
                                            </div>
                                        );
                                    })}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
