import { FC } from 'react';
import Image from '../../Image';

const PopperContainer: FC = ({ attrs, children }: any) => {
    return (
        <div
            className="bg-white w-full border-gray-500 border relative rounded-[2px] shadow-[0_1px_8px_1px_rgba(0,0,0,.25)]"
            tabIndex="-1"
            {...attrs}
        >
            <span
                className="absolute w-0 h-0 border-solid border-transparent border-x-[8px] border-b-[8px]
             border-b-white top-[-6px] left-1/2"
            />
            {children}
        </div>
    );
};
export default PopperContainer;
