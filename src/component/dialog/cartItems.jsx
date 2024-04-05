import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import { formattedCurrency } from '../../helper';

const CartItems = ({ data }) => {
  const { image, title, id, quantity, price } = data;
  const [newPrice, setNewPrice] = useState(price);

  const { removeFromCart, addOne, removeOne } = useContext(MainContext);

  useEffect(() => {
    setNewPrice(price * quantity);
  }, [quantity]);

  const currency = formattedCurrency(newPrice);

  return (
    <div className="bg-gray relative flex items-start gap-2  text-dark w-full h-[124px] mb-2 border-[1px] border-s-teal-400">
      <div className="w-[136px] h-[120px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <div>
        <h2 className="text-base font-normal leading-[26px]">{title}</h2>

        <p className="mt-1 text-sm font-normal leading-6 text-dark">
          + Подарок:{' '}
          <a
            href="#!"
            className="text-primary">
            “Приложение к замкам Golden Service”
          </a>
        </p>

        <div className="flex items-center gap-2 mt-6">
          <button
            type="button"
            className="text-base py-2 px-4"
            onClick={() => removeOne(id)}
            disabled={quantity == 1}>
            -
          </button>
          <div className="py-1 px-5 bg-white">{quantity}</div>
          <button
            type="button"
            className="text-base py-2 px-4"
            onClick={() => addOne(id)}>
            +
          </button>
        </div>
      </div>

      <button
        className="absolute top-2 right-2 text-red-400"
        onClick={() => removeFromCart(id)}>
        Delete
      </button>

      <span className="absolute bottom-2 right-2">{currency}</span>
    </div>
  );
};

export default CartItems;
