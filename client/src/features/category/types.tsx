export interface ICategoriesState {
    _id: string;
    name: string;
    image: {
        name: string;
        size: number;
        url: string;
    };
    createdAt?: string;
    updatedAt?: string;
}

export interface IInitValue {
    value: ICategoriesState[];
    isLoading: boolean;
}
