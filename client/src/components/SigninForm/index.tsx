import { TextField } from '@mui/material';
import Button from '../Button';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../../contexts/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormInput {
    user_name: string;
    password: string;
}

const SigninForm = () => {
    const modal = useModal();

    const schema = yup.object().shape({
        user_name: yup.string().required('username required'),
        password: yup.string().min(4).max(20).required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const submit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };
    return (
        <div className={'mx-auto w-96 bg-white rounded-md relative'}>
            <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => modal.setModal(false)}
            >
                <i className="border rounded-full w-9 h-9 flex justify-center items-center">
                    <FontAwesomeIcon icon={faXmark} />
                </i>
            </div>
            <div className="p-8 pt-14">
                <h1 className="text-center font-bold text-3xl">Đăng nhập</h1>

                {/* Form */}
                <form onSubmit={handleSubmit(submit)}>
                    <div className={'my-5 flex flex-col'}>
                        <label className="mb-2 font-semibold"> Tên đăng nhập </label>
                        <TextField size="small" {...register('user_name')} />
                        <div className="text-red-500 mt-1 ml-1">{errors.user_name?.message}</div>
                    </div>

                    <div className={'my-5 flex flex-col'}>
                        <label className="mb-2 font-semibold"> Mật khảu </label>
                        <TextField size="small" {...register('password')} />
                        <div className="text-red-500 mt-1 ml-1">{errors.password?.message}</div>
                    </div>
                    <div className="flex items-center justify-center mb-6 text-gray-400">
                        <span>Chưa có tài khoản?</span>
                        <span className="ml-1">
                            <a href="/" className="hover:underline">
                                Đăng ký ngay
                            </a>
                        </span>
                    </div>
                    <div className={'bg-green-500 p-2 rounded-md'}>
                        <Button type="submit">
                            <p className="text-white ">Đăng nhập</p>
                        </Button>
                    </div>
                </form>
                {/* --- */}
            </div>
        </div>
    );
};

export default SigninForm;
