import { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface Props {
    title: string;
    titleColor: string;
    bgColor: string;
}

const CateBar: FC<Props> = ({ title, titleColor, bgColor }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const tabStyle = {
        border: '1px solid #ccc',
        borderRadius: '6px',
        margin: '2px',
    };

    return (
        <div className={`flex items-center justify-between ${bgColor}`}>
            <div className="w-[calc(100%-665px)] pl-[10px]">
                <h1 className={`text-bold uppercase ${titleColor}`}>{title}</h1>
            </div>
            <div className={'max-w-[665px]'}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    TabIndicatorProps={{
                        style: {
                            display: 'none',
                        },
                    }}
                    sx={{
                        '.MuiTabs-scrollButtons.Mui-disabled': {
                            opacity: '0.3',
                        },
                        '.Mui-selected': {
                            color: `#ff7b01`,
                        },
                    }}
                >
                    <Tab label="Item One" style={tabStyle} />
                    <Tab label="Item Two" style={tabStyle} />
                    <Tab label="Item Three" />
                    <Tab label="Item Four" />
                    <Tab label="Item Five" />
                    <Tab label="Item Six" />
                    <Tab label="Item Seven" />
                    <Tab label="Item Seven" />
                    <Tab label="Item Seven" />
                    <Tab label="Item Seven" />
                    <Tab label="Item Seven" />
                    <Tab label="Item Seven" />
                </Tabs>
            </div>
        </div>
    );
};

export default CateBar;
