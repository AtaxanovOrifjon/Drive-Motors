import { Icons } from '../../assets/icons';

const Footer = () => {
  return (
    <footer className="bg-gray py-10">
      <div className="container">
        <div className="flex items-start justify-between gap-8">
          <div>
            <h2 className="text-sm font-bold leading-4 text-dark w-[230px]">
              Подпишитесь на нашу рассылку и узнавайте о акция быстрее
            </h2>

            <form className="mt-8 flex items-center">
              <input
                type="email"
                placeholder="Введите ваш e-mail:"
                className="focus:outline-primary text-sm font-normal py-2 px-3 leading-4"
              />
              <button
                type="submit"
                className="bg-primary py-[10px] px-4 text-xs font-semibold leading-3 text-white uppercase">
                Отправить
              </button>
            </form>

            <div></div>
          </div>

          <div>
            <h2 className="text-sm font-bold leading-4 text-dark w-[230px]">
              Информация
            </h2>

            <nav className="flex flex-col gap-2 mt-4">
              <a
                className="text-sm font-normal leading-4"
                href="#!">
                О компании
              </a>
              <a
                className="text-sm font-normal leading-4"
                href="#!">
                Контакты
              </a>
              <a
                className="text-sm font-normal leading-4"
                href="#!">
                Акции
              </a>
              <a
                className="text-sm font-normal leading-4"
                href="#!">
                Магазины
              </a>
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-bold leading-4 text-dark w-[230px]">
              Интернет-магазин
            </h2>
            <nav className="flex flex-col gap-2 mt-4">
              <a
                className="text-sm font-normal leading-4"
                href="#!">
                Доставка и самовывоз
              </a>
              <a
                className="text-sm font-normal leading-4"
                href="#!">
                Оплата
              </a>
              <a
                className="text-sm font-normal leading-4"
                href="#!">
                Возврат-обмен
              </a>
              <a
                className="text-sm font-normal leading-4"
                href="#!">
                Новости
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-8 self-center">
            <a href="#!">
              <Icons.instagramIcon />
            </a>
            <a href="#!">
              <Icons.vkIcon />
            </a>
            <a href="#!">
              <Icons.facebookIcon />
            </a>
            <a href="#!">
              <Icons.youtubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
