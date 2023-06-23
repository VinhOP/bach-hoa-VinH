import { FC, forwardRef } from 'react';

interface IInputFormProps {
    label?: string;
    className?: string;
}

const InputForm = forwardRef<HTMLInputElement, IInputFormProps>(
    ({ label, className, ...props }, ref) => {
        return (
            <div className={`flex flex-col my-4 ${className}`}>
                {label && (
                    <label htmlFor="product-name" className="mb-2">
                        {label}
                    </label>
                )}
                <div className="border px-2 py-1">
                    <input
                        type="text"
                        id="product-name"
                        className="w-full outline-none"
                        {...props}
                        ref={ref}
                    />
                </div>
            </div>
        );
    },
);

export default InputForm;
