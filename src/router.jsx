import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/error-page';
import Dashboard from '@routes/Dashboard';
import Index from '@routes/Index';
import StockList from '@routes/stockList';
import StockDetailsTW from '@routes/StockDetailsTW';
import StockDetailsUS from '@routes/StockDetailsUS';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Dashboard />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <Index />,
          index: true,
        },
        {
          path: 'tw',
          element: <StockList />,
          children: [
            {
              path: ':stock_id',
              element: <StockDetailsTW />,
              loader: ({ params }) => params.stock_id.toUpperCase(),
            },
          ],
        },
        {
          path: 'us',
          element: <StockList />,
          children: [
            {
              path: ':stock_id',
              element: <StockDetailsUS />,
              loader: ({ params }) => params.stock_id.toUpperCase(),
            },
          ],
        },
      ],
    },
  ],
  {
    basename: process.env.GithubPages ? '/stocks-watch-list/' : '/',
  },
);
