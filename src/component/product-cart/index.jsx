import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { Icons } from '../../assets/icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { formattedCurrency } from '../../helper';

const ProductCart = ({ data, cart, like }) => {
  const { id, title, image, price } = data;
  const { addToLike, addToCart, removeFromCart, removeFromLike } =
    useContext(MainContext);
  const currency = formattedCurrency(price);

  return (
    <div
      key={id}
      className="group hover:shadow-shadow hover:border-transparent transition-all duration-[0.4s] border-[1px] relative border-blue-gray-50 rounded-sm  pt-[52px] px-9 pb-8 ">
      <span className="absolute top-0 left-0 bg-primary text-white uppercase text-xs font-normal leading-[14px] py-[6px] px-4">
        Sale
      </span>

      <button
        type="button"
        className="absolute top-4 right-4"
        onClick={() => (like ? removeFromLike(id) : addToLike(data))}>
        <Icons.likeIcon color={like && 'red'} />
      </button>
      <Link to={`/view/${id}`}>
        <img
          src={image}
          className="w-[200px] h-[200px] object-contain mx-auto mb-3"
          alt={title}
        />
      </Link>

      <h2 className="text-center mx-auto text-lg font-normal leading-5 group-hover:text-primary transition-all duration-[0.4s]">
        {title}
      </h2>

      <span className="block mx-auto text-center mt-6 font-bold text-3xl group-hover:text-primary transition-all duration-[0.4s]">
        {currency}
      </span>

      <button
        type="button"
        className={clsx(
          cart ? 'border-2 border-blue-700 bg-white' : 'bg-primary',
          'absolute bottom-0 right-0 bg-primary py-2 px-4 rounded-tl-[10px] border-[1px] border-transparent'
        )}
        onClick={() => (cart ? removeFromCart(id) : addToCart(data))}>
        <Icons.cartIcon color={cart ? 'rgb(28, 98, 205)' : '#fff'} />
      </button>
    </div>
  );
};

export default ProductCart;
