import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/error-page';
import Dashboard from '@routes/Dashboard';
import Index from '@routes/Index';
import StockList from '@routes/StockList';
import StockDetails from '@routes/StockDetails';
import TreasuryBound from '@routes/TreasuryBound';
import TreasuryBoundList from '@routes/TreasuryBoundList';

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
          path: 'stock_market/:market',
          element: <StockList />,
          children: [
            {
              path: ':stock_id',
              element: <StockDetails />,
              loader: ({ params }) => params.stock_id.toUpperCase(),
            },
          ],
        },
        {
          path: 'us_treasury_bound',
          element: <TreasuryBoundList />,
          children: [
            {
              path: ':bound_data_id',
              element: <TreasuryBound />,
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
