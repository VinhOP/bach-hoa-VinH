import { Button } from '@mui/material';

const Product = () => {
    return (
        <div>
            <div className="flex">
                <div className=""></div>
                <div>
                    <h1> title</h1>
                    <p> price</p>
                    <div>
                        <Button> Chọn mua </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
