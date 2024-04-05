import React from 'react';
import ProductTabs from '../tabs';
import { Icons } from '../../assets/icons';
import { Rating } from '@material-tailwind/react';

const ProductInfo = ({ data }) => {
  return (
    <div className="max-w-[570px] w-full h-full">
      <h2 className="text-3xl font-bold text-dark">{data?.title}</h2>
      <span className="block mt-[10px] text-blue-gray-400 text-sm font-normal leading-[18px]">
        Нашли дешевле? Снизим цену!
      </span>

      <div className="flex items-center gap-7 mt-[26px]">
        <button type="button">
          <Icons.likeIcon />
        </button>
        <Rating
          value={4}
          unratedColor="blue"
          ratedColor="blue"
        />
      </div>
      <ProductTabs />
      <button
        type="button"
        className="bg-primary text-white py-4 px-12 rounded w-max block mt-11 uppercase">
        купить
      </button>
    </div>
  );
};

export default ProductInfo;
