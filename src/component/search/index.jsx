import { useState } from 'react';
import clsx from 'clsx';

const Search = () => {
  const [active, setActive] = useState('номер');

  return (
    <section className="mt-20">
      <div className="container">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setActive('номер')}
            className={clsx(
              active == 'номер'
                ? 'bg-gray font-semibold'
                : 'bg-white text-normal',
              'text-xl font-normal leading-6 text-dark py-3 px-[26px] hover:bg-gray rounded-md'
            )}>
            Поиск по номеру
          </button>
          <button
            type="button"
            onClick={() => setActive('марке')}
            className={clsx(
              active == 'марке'
                ? 'bg-gray font-semibold'
                : 'bg-white text-normal',
              'text-xl font-normal leading-6 text-dark py-3 px-[26px] hover:bg-gray rounded-md'
            )}>
            Поиск по марке
          </button>
          <button
            type="button"
            onClick={() => setActive('товар')}
            className={clsx(
              active == 'товар'
                ? 'bg-gray font-semibold'
                : 'bg-white text-normal',
              'text-xl font-normal leading-6 text-dark py-3 px-[26px] hover:bg-gray rounded-md'
            )}>
            Поиск по названию товара
          </button>
        </div>

        <form className="flex w-ful my-6">
          <input
            type="text"
            className="w-full py-4 focus:outline-primary px-5 rounded-tl-[3px] rounded-bl-[3px] bg-gray placeholder:text-base placeholder:font-normal placeholder:leading-5"
            placeholder={`Введите ${active}`}
          />
          <button
            type="submit"
            className="py-4 px-10 bg-primary text-white text-sm font-bold leading-4 uppercase rounded-[3px]">
            искать
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
