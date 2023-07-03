import { ChangeEvent, FC, HTMLInputTypeAttribute, forwardRef } from 'react';
import InputMask from 'react-input-mask';

interface IInputFormProps {
    label?: string;
    placeholder?: string;
    currency?: boolean;
    error?: string;
    type?: HTMLInputTypeAttribute | undefined;
    className?: string;
}

const InputForm = forwardRef<HTMLInputElement, IInputFormProps>(
    ({ label, className, error, type = 'text', currency = false, ...props }, ref) => {
        const renderInput = () => {
            switch (type) {
                case 'file':
                    return (
                        <div className="">
                            <input
                                type="file"
                                className="w-full outline-none"
                                {...props}
                                ref={ref}
                            />
                        </div>
                    );
                default:
                    return (
                        <div className="border px-2 py-1 flex">
                            <input
                                type="text"
                                className="w-full outline-none"
                                {...props}
                                ref={ref}
                            />
                            {currency && <span>đ</span>}
                        </div>
                    );
            }
        };
        return (
            <div className={`flex flex-col ${className}`}>
                {label && (
                    <label htmlFor="product-name" className="mb-1">
                        {label}
                    </label>
                )}
                {renderInput()}
                <div className="text-red-500 mt-2">{error}</div>
            </div>
        );
    },
);

export default InputForm;
