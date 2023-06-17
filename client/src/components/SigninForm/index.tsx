import { TextField } from '@mui/material';
import Button from '../Button';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../../contexts/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SigninForm = () => {
    const modal = useModal();
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
                <form>
                    <div className={'my-5 flex flex-col'}>
                        <label className="mb-2 font-semibold"> Tên đăng nhập </label>
                        <TextField size="small" />
                    </div>
                    <div className={'my-5 flex flex-col'}>
                        <label className="mb-2 font-semibold"> Mật khảu </label>
                        <TextField size="small" />
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
                        <Button>
                            <p className="text-white ">Đăng nhập</p>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SigninForm;
