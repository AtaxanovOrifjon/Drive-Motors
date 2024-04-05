import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../component';
import { Icons } from '../../assets/icons';

const Products = () => {
  const { category } = useParams();
  const [product, setProduct] = useState([]);

  async function getData() {
    await fetch(
      `https://65f1992e034bdbecc7632033.mockapi.io/products?category=${category}`
    )
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }

  useEffect(() => {
    getData();
  }, [category]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="grid grid-cols-4 gap-7 mt-10">
          {
            product.length ? (
              product.map(el => (
                <div className='relative border-2 border-gray rounded pt-[52px] pb-[31px] px-2'>
                  <div className='w-[250px] h-[190px] '>
                    <Link to={`/view/${el.id}`}>
                    <img src={el.image} className='w-full h-full object-contain' alt={el.title} />
                    </Link>
                  </div>
                  <h2 className='mt-6 text-center text-lg font-semibold leading-5 text-dark'>{el.title}</h2>
                  <span className='mt-6 block text-center text-3xl font-bold'>{el.price} $</span>
                  <button className='absolute top-[14px] right-5'>
                    <Icons.likeIcon/>
                  </button>
                  <button className='absolute bottom-0 right-0 py-2 px-4 bg-primary rounded-tl-[10px]'>
                    <Icons.cartIcon color="white"/>
                  </button>
                </div>
              ))
            ) : (
             Array.from({length: 4}).map(el => (
              <div className='animate-pulse bg-gray w-[271px] h-[403px] rounded'></div>
             ))
            )
          }
        </div>
      </div>
    </>
  );
};

export default Products;
