import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import Hero from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: 'second-page',
        element: <SecondPage />,
      },
      {
        path: 'third-page',
        element: <ThirdPage />,
      },
      {
        path: 'contact-page',
        element: <ContactPage />,
      },
      {
        path: 'cart-page',
        element: <CartPage />,
      },
    ],
  },
]);
