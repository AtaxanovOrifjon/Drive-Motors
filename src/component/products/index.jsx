import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import { productData } from '../../data';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import ProductCart from '../product-cart';

import 'swiper/css';
import 'swiper/css/navigation';

const Products = () => {
  const { cartItems, likeItems } = useContext(MainContext);
  return (
    <section className="mt-20 ">
      <div className="container">
        <h2 className="text-2xl font-bold leading-[30px] text-dark mb-9">
          Популярные товары
        </h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper p-4">
          {productData.map((el) => (
            <SwiperSlide key={el.id}>
              <ProductCart
                data={el}
                cart={cartItems.some((item) => el.id == item.id)}
                like={likeItems.some((item) => el.id == item.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="bg-gray block text-base font-normal leading-[18px] uppercase tracking-[1.5px]  py-4 px-11 mx-auto mt-9 mb-[6px]">
          Показать еще
        </button>
      </div>
    </section>
  );
};

export default Products;
