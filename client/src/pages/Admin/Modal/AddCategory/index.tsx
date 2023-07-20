import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popper from '../../../../components/Popper';
import { useModal } from '../../../../contexts/ModalContext';
import { faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import InputForm from '../../../../components/InputForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button } from '../../../../components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../../features/category/categorySlice';
import { useState } from 'react';
import { addCategoryRequest } from '../../../../services/categoryService';

interface ICategoryFormInput {
    name: string;
    image: any;
}

const AddCategory = () => {
    const modal = useModal();
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        name: yup.string().required('Tên không được bỏ trống'),
        image: yup
            .mixed()
            .test('file', 'xin hãy chọn một ảnh', (value: any) => {
                return value.length > 0;
            })
            .test('file_size', 'file quá lớn', (value: any) => {
                return value[0]?.size < 400000;
            })
            .required(),
    });

    const { register, handleSubmit, reset } = useForm<ICategoryFormInput>({
        resolver: yupResolver(schema),
    });

    const submit: SubmitHandler<ICategoryFormInput> = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('image', data.image[0]);
        try {
            setIsLoading(true);
            const category = await addCategoryRequest(formData);
            dispatch(addCategory(category));
            setIsLoading(false);
            reset();
        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    };

    return (
        <div className="w-[600px] relative min-h-fit max-h-[600px] mx-auto">
            <Popper className="p-8 pt-12">
                <div
                    className="absolute border rounded-full w-9 h-9 
                    right-4 top-4 hover:bg-slate-100 flex justify-center items-center cursor-pointer"
                    onClick={() => {
                        modal.setModal(false);
                    }}
                >
                    <i className="">
                        <FontAwesomeIcon icon={faXmark} />
                    </i>
                </div>
                <h1 className="text-3xl my-4 font-semibold text-center">Thêm loại sản phẩm</h1>

                <form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit(submit)}
                    encType="multipart/form-data"
                >
                    <div>
                        <InputForm label="Tên loại" {...register('name')} />
                    </div>
                    <div className="w-fit">
                        <InputForm type="file" label="Hình ảnh bìa" {...register('image')} />
                    </div>
                    <div
                        className={`${
                            isLoading ? 'bg-gray-400 pointer-events-none ' : 'bg-lime-400'
                        } rounded-md mx-auto my-8 w-[400px]`}
                    >
                        <Button type="submit">
                            {isLoading ? (
                                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                            ) : (
                                <p>Thêm</p>
                            )}
                        </Button>
                    </div>
                </form>
            </Popper>
        </div>
    );
};

export default AddCategory;
