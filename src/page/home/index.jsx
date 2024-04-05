import React from 'react';
import {
  Banner,
  Category,
  Footer,
  Header,
  Products,
  Search,
} from '../../component';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Search />
      <Category />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
