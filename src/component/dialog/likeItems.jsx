import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { Rating } from '@material-tailwind/react';

const LikeItems = ({ data, cart }) => {
  const { id, title, image } = data;
  const price = 9000;
  const { addToCart, removeFromCart } = useContext(MainContext);
  return (
    <div className="h-[90px] bg-gray mb-2 flex items-start gap-2 relative">
      <div className="w-[102px] h-[90px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <div>
        <h2 className="text-sm font-normal leading-6 text-dark">{title}</h2>
        <Rating value={id} />

        <span className="block mt-[10px]">
          {price.toLocaleString('ru-Ru', {
            style: 'currency',
            currency: 'RUB',
          })}
        </span>
      </div>

      <button
        type="button"
        onClick={() => (cart ? removeFromCart(id) : addToCart(data))}
        className="absolute top-2 right-2">
        {cart ? 'Remove from cart' : 'Add to cart'}
      </button>
    </div>
  );
};

export default LikeItems;
