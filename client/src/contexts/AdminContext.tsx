import { FC, ReactNode, createContext, useContext } from 'react';

interface IAdmin {
    id: number;
    name: string;
    image: string;
}

const category = [
    {
        id: 1,
        name: 'mi goi',
        image: 'https://acecookvietnam.vn/wp-content/uploads/2020/09/HD_03_BQSD_.jpg',
    },
    {
        id: 2,
        name: 'sua',
        image: 'https://cdn.tgdd.vn/Files/2019/11/24/1221901/co-bao-nhieu-loai-sua-tuoi-va-moi-loai-co-dac-diem-the-nao-201911242242462420.jpg',
    },
    {
        id: 3,
        name: 'banh keo',
        image: '',
    },
];

const brands = [
    {
        name: 'hao hao',
        products: [
            {
                name: 'mi tom chua cay',
            },
            {
                name: 'mi xao kho',
            },
        ],
    },
    {
        name: 'cung dinh',
        products: [
            {
                name: 'mi bo',
            },
            {
                name: 'mi soi pho',
            },
        ],
    },
];

const AdminContext = createContext<IAdmin[]>(category);

export const useProducts = () => useContext(AdminContext);

interface IAdminContextProps {
    children: ReactNode;
}

const AdminProvider: FC<IAdminContextProps> = ({ children }) => {
    return <AdminContext.Provider value={category}>{children}</AdminContext.Provider>;
};

export default AdminProvider;
