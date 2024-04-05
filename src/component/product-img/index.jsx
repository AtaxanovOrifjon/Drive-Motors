import React from 'react';

const ProductImage = ({data}) => {
  return (
    <div className="max-w-[500px] w-full h-full relative">
      <img
        src={data?.image}
        className="w-full h-[375px] object-contain mt-[60px]"
        alt={data?.title}
      />
      <span className="uppercase bg-primary text-white py-3 px-6 rounded-sm text-sm font-normal leading-[18px] absolute top-0 left-0">
        Sale
      </span>
      <span className="text-center block mt-4 line-through text-blue-gray-400 text-3xl font-light">
        {data?.discount?.toLocaleString()} $
      </span>
      <h2 className="text-center text-[40px] font-bold leading-[48px] mt-3">
        {data?.price?.toLocaleString()} $
      </h2>
      <span className="mt-4 text-primary text-center block text-sm font-normal leading-[18px]">
        Нашли дешевле? Снизим цену!
      </span>
    </div>
  );
};

export default ProductImage;
