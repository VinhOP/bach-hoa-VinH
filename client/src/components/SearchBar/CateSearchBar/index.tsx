import { IconSearch } from '@tabler/icons-react';
import Tippy from '@tippyjs/react/headless';
import { FC } from 'react';
import PopperContainer from '../PopperContainer';

interface Props {
    placeholder: string;
}
const CateSsearchBar: FC<Props> = ({ placeholder }) => {
    const renderResult = (attrs: any) => {
        return (
            <div className="w-[240px]">
                <PopperContainer {...attrs}>
                    <div className="p-2">
                        <div>asdqw</div>
                        <div>asdqw</div>
                    </div>
                </PopperContainer>
            </div>
        );
    };
    return (
        <div className="relative">
            <Tippy
                render={renderResult}
                interactive
                placement={'bottom'}
                trigger="focusin"
                hideOnClick={false}
                offset={[0, 14]}
            >
                <div className="flex w-60 h-9 border-gray-400 border rounded-md">
                    <input
                        className="w-full px-4 outline-none text-sm rounded-l-[5px]"
                        placeholder={placeholder}
                        type="text"
                    />
                    <div
                        className="w-12 hover:cursor-pointer
                    flex items-center justify-center rounded-r-[5px] bg-white"
                    >
                        <i className="text-gray-300 text-[10px]">
                            <IconSearch />
                        </i>
                    </div>
                </div>
            </Tippy>
        </div>
    );
};

export default CateSsearchBar;
