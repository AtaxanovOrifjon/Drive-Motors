import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../assets/icons';
import LikeModal from '../dialog/like';
import CartModal from '../dialog/cart';
import { Badge } from '@material-tailwind/react';
import { MainContext } from '../../context/MainContext';

const HeaderTop = () => {
  const [likeModal, setLikeModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  const { likeItems, cartItems } = useContext(MainContext);

  function likeModalHandle() {
    setLikeModal(!likeModal);
  }

  function handleCartModal() {
    setCartModal(!cartModal);
  }
  return (
    <div className="container">
      <div className="flex items-center justify-between py-[22px]">
        <div className="flex items-center max-w-[450px] w-full justify-between">
          <a
            href="#!"
            className="text-xl leading-6 font-bold">
            Магазины
          </a>
          <a
            href="#!"
            className="text-xl leading-6 font-bold">
            Акции
          </a>
          <a
            href="#!"
            className="text-xl leading-6 font-bold">
            Доставка и оплата
          </a>
        </div>
        <Link to="/">
          <Icons.logoIcon />
        </Link>

        <div className="flex items-center justify-between">
          <a
            href="#!"
            className="flex items-end gap-1 text-xl leading-6 font-bold">
            <Icons.locationIcon />
            Москва, ул. Науки 25
          </a>
        </div>

        <div className="flex items-center gap-3">
          {likeItems.length ? (
            <Badge content={likeItems.length}>
              <button
                type="button"
                onClick={likeModalHandle}>
                <Icons.likeIcon />
              </button>
            </Badge>
          ) : (
            <button
              type="button"
              onClick={likeModalHandle}>
              <Icons.likeIcon />
            </button>
          )}
          <button type="button">
            <Icons.userIcon />
          </button>
          {cartItems.length ? (
            <Badge content={cartItems.length}>
              <button
                type="button"
                onClick={handleCartModal}>
                <Icons.cartIcon />
              </button>
            </Badge>
          ) : (
            <button
              type="button"
              onClick={handleCartModal}>
              <Icons.cartIcon />
            </button>
          )}
          <LikeModal
            open={likeModal}
            handleOpen={likeModalHandle}
          />
          <CartModal
            open={cartModal}
            handleOpen={handleCartModal}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
