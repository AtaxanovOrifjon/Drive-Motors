import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Products, View } from './page';
import './App.css';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/products/:category',
      element: <Products />,
    },
    {
      path: '/order',
      element: '/order',
    },
    {
      path: '/view/:id',
      element: <View />,
    },
  ]);

  return <RouterProvider router={route}/>;
}

export default App;
