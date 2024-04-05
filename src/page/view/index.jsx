import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, ProductImage, ProductInfo } from '../../component';

const View = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [data, setData] = useState([]);
  
  async function getData() {
    await fetch(`https://65f1992e034bdbecc7632033.mockapi.io/products?id=${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    if (product.length) {
      setData(product.find((el) => el.id == id));
    }
  }, [product]);

  return (
    <>
      <Header />
      <section className="mt-11">
        <div className="container">
          <div className="flex items-center justify-between gap-7 h-[579px]">
            <ProductImage data={data} />
            <ProductInfo data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default View;
