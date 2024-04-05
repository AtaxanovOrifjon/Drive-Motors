import { Carousel } from '@material-tailwind/react';
import { caroselData } from '../../data';

import banner_img from '../../assets/image/banner-img.png';

const Banner = () => {
  
  return (
    <div className="container">
      <div className="flex items-center justify-between w-full h-[400px] mt-20 gap-9">
        <div className="w-3/4 bg-gray h-full">
          <Carousel>
            {caroselData.map((el) => (
              <img
                key={el.id}
                src={el.image}
                alt={el.alt}
                className="w-full h-full object-cover "
              />
            ))}
          </Carousel>
        </div>
        <div className="w-1/4 h-full border-2 border-gray relative">
          <span className="absolute top-0 left-0 py-2 px-5 bg-primary text-white text-xs font-bold uppercase">
            акция
          </span>
          <span className="absolute top-0 right-1 text-[27px] font-bold leading-8 text-primary">
            190 000 ₽
          </span>
          <span className="absolute top-9 right-1 text-[rgb(196,196,196)] line-through text-base font-normal leading-4">
            225 000 ₽
          </span>

          <div className="mt-16">
            <img
              src={banner_img}
              width={125}
              className="mx-auto"
              alt="banner-img"
            />
            <h2 className="text-lg text-dark font-bold leading-5 mt-1 w-[160px] text-center mx-auto">
              Лодочный мотор Suzuki DF9.9BRS
            </h2>
          </div>

          <div className="bg-gray py-[26px] px-4 absolute bottom-0 left-0 right-0 text-center">
            <h3 className='text-dark text-lg leading-5 font-normal'>Акция действует до</h3>
            <span className='mt-2 block text-lg font-bold leading-[22px] text-primary'>31.08.2020</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
