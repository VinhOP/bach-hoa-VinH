import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popper from '../../../../components/Popper';
import { Link } from 'react-router-dom';
import Image from '../../../../components/Image';
import { useState } from 'react';
import axios from 'axios';
import { Modal } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../../../features/category/categorySlice';

interface ICategoryProps {
    category: {
        name: string;
        image: {
            name: string;
            url: string;
            size: number;
        };
        _id: string;
    };
    fetchCategories: () => {};
}

interface ICategoryToDelete {
    name: string;
    image: {
        name: string;
        url: string;
        size: number;
    };
    _id: string;
}

const Category = ({ category, fetchCategories }: ICategoryProps) => {
    const [openOption, setOpenOption] = useState<Boolean>(false);
    const dispatch = useDispatch();

    const handleDeleteCategory = async (category: ICategoryToDelete) => {
        dispatch(setIsLoading(true));
        try {
            const deleteCate = await axios.delete(`/admin/api/${category._id}`);
            const deleteCateImg = await axios.delete(`/admin/api/image/${category.image.name}`);
            fetchCategories();
        } catch (err) {
            dispatch(setIsLoading(false));
            console.log(err);
        }
    };

    const handleOpenOption = () => {
        setOpenOption(!openOption);
    };

    const productPath = category.name.replace(/ /g, '-');

    return (
        <>
            <li className="flex flex-col relative justify-center items-center w-fit cursor-pointer">
                <div className={`absolute top-2 right-2 ${openOption ? 'z-20' : 'z-0'}`}>
                    <div
                        className={`flex items-center justify-center bg-white w-6 h-6 rounded-full
                        hover:bg-gray-100 relative cursor-pointer`}
                        onClick={handleOpenOption}
                    >
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                    <div
                        className={`absolute w-16 -left-6 top-[25px] z-10 ${
                            openOption ? 'visible' : 'invisible'
                        }`}
                    >
                        <Popper className="rounded-sm border border-gray-500">
                            <ul className="grid-cols-1 gap-12">
                                <li className="w-full py-1 text-center hover:bg-gray-100 border-b text-sm">
                                    Sửa
                                </li>
                                <li
                                    className="w-full py-1 text-center hover:bg-gray-100 text-sm"
                                    onClick={() => handleDeleteCategory(category)}
                                >
                                    Xóa
                                </li>
                            </ul>
                        </Popper>
                    </div>
                </div>

                <Link to={productPath} className="w-64 h-36 p-1">
                    <Image src={category.image.url} className="rounded-sm" />
                </Link>
                <p>
                    {category.name
                        .toLowerCase()
                        .split(' ')
                        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
                        .join(' ')}
                </p>
            </li>
            {openOption && (
                <div
                    className="fixed inset-0 cursor-default z-10"
                    onClick={() => setOpenOption(false)}
                ></div>
            )}
        </>
    );
};

export default Category;
