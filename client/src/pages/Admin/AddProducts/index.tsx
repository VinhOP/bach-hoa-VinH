import { FC } from 'react';
import { Button } from '../../../components';
import InputForm from '../../../components/InputForm';
import Popper from '../../../components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../../../contexts/ModalContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface IProductFormInput {
    name: string;
    quantity: number;
    price: number;
    special_price: number | null | undefined;
}

const AddProducts: FC = () => {
    const modal = useModal();

    const schema = yup.object().shape({
        name: yup.string().required(),
        quantity: yup.number().integer().positive().required(),
        price: yup.number().positive().required(),
        special_price: yup
            .number()
            .nullable()
            .transform((curr, orig) => (orig === '' ? null : curr)),
    });

    const { register, handleSubmit } = useForm<IProductFormInput>({
        resolver: yupResolver(schema),
    });

    const submit: SubmitHandler<IProductFormInput> = (data) => {
        console.log(data);
    };

    return (
        <div className=" w-[600px] relative h-4/5 mx-auto">
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

                <form onSubmit={handleSubmit(submit)}>
                    <InputForm label="Tên sản phẩm" {...register('name')} />
                    <div className="flex w-full">
                        <InputForm
                            label="Số lượng"
                            className="basis-1/3"
                            {...register('quantity')}
                        />
                        <InputForm
                            label="Giá gốc"
                            className="basis-1/3 ml-4"
                            {...register('price')}
                        />
                        <InputForm
                            label="Giá đã giảm"
                            className="basis-1/3 ml-4"
                            {...register('special_price')}
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
