
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const [category, setCategory] = useState([]);
  async function getData() {
    await fetch(`https://65f1992e034bdbecc7632033.mockapi.io/category`)
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="mt-20 mb-10 grid grid-cols-3 gap-[30px]">
        {category.length
          ? category.map((el) => (
              <div
                key={el.id}
                className="group border-2 border-gray rounded-sm px-5 py-4 flex transition-all justify-between hover:border-transparent hover:shadow-shadow">
                <div className="flex flex-col justify-between">
                  <h2 className="text-2xl font-bold leading-7 text-dark group-hover:text-primary">
                    {el.title}
                  </h2>
                  <Link
                    to={`/products/${el.category}`}
                    className="text-[rgb(196,196,196)]">
                    Подробее
                  </Link>
                </div>

                <div className="max-w-[207px] h-[100px]">
                  <img
                    src={el.image}
                    alt={el.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))
          : Array.from({ length: 6 }).map((el) => (
              <div
                key={el}
                className="max-w-[370px] w-full h-[129px] animate-pulse bg-gray rounded-sm"></div>
            ))}
      </div>
    </div>
  );
};

export default Category;
