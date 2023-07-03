import { FC, useEffect } from 'react';
import { Button } from '../../../../components';
import InputForm from '../../../../components/InputForm';
import Popper from '../../../../components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../../../../contexts/ModalContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';

interface IProductFormInput {
    name: string;
    quantity: number | undefined;
    price: number | undefined;
    special_price: number | null | undefined;
    image: object;
}

const AddProducts: FC = () => {
    const modal = useModal();

    // yup validate
    const schema = yup.object().shape({
        name: yup.string().required('nhập tên sản phẩm'),
        quantity: yup
            .number()
            .integer('vui lòng nhập số nguyên')
            .moreThan(-1, 'phải là số dương')
            .transform((curr, orig) => (orig === '' ? 0 : curr))
            .typeError('phải là số'),
        price: yup
            .number()
            .moreThan(-1, 'phải là số dương')
            .transform((curr, orig) => (orig === '' ? 0 : curr))
            .typeError('phải là số'),
        special_price: yup
            .number()
            .moreThan(-1, 'phải là số dương')
            .nullable()
            .transform((curr, orig) => (orig === '' ? null : curr))
            .typeError('phải là số'),
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

    //react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<IProductFormInput>({
        resolver: yupResolver(schema),
    });

    //handle submit
    const submit: SubmitHandler<IProductFormInput> = (data) => {
        console.log(data);
    };

    useEffect(() => {
        return () => modal.setModal(false);
    }, []);

    return (
        <div className=" w-[600px] relative min-h-fit max-h-[600px] mx-auto">
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

                <h1 className="my-4 text-3xl font-semibold text-center">Thêm sản phẩm</h1>

                <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
                    <div className="">
                        <InputForm
                            label="Tên sản phẩm"
                            {...register('name')}
                            error={errors.name?.message}
                        />
                    </div>
                    <div className="flex w-full">
                        <div>
                            <InputForm
                                label="Số lượng"
                                className="basis-1/3"
                                placeholder="0"
                                error={errors.quantity?.message}
                                {...register('quantity')}
                            />
                        </div>

                        <div>
                            <InputForm
                                label="Giá gốc"
                                currency
                                placeholder="0"
                                error={errors.price?.message}
                                className="basis-1/3 ml-4"
                                {...register('price')}
                            />
                        </div>

                        <div>
                            <InputForm
                                label="Giá đã giảm"
                                currency
                                placeholder="0"
                                error={errors.special_price?.message}
                                className="basis-1/3 ml-4"
                                {...register('special_price')}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-fit">
                        <InputForm
                            type="file"
                            label="Hình ảnh sản phẩm"
                            {...register('image')}
                            error={errors.image?.message}
                        />
                    </div>

                    <div className="bg-lime-400 rounded-md mx-auto my-8 w-[400px]">
                        <Button type="submit">
                            <p className="text-lg">Thêm</p>
                        </Button>
                    </div>
                </form>
            </Popper>
        </div>
    );
};

export default AddProducts;
