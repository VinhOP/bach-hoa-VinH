import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { images } from '../../assets/images/slider';
import styles from './Slideshow.module.scss';
import classnames from 'classnames/bind';
const sx = classnames.bind(styles);

const Slideshow = () => {
    return (
        <div className="flex w-full justify-center mt-20 py-1 bg-white">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                {images.map((image) => {
                    return (
                        <div className="h-[200px]">
                            <img
                                className="w-full h-full object-contain"
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Slideshow;
