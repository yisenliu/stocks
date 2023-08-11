import './stockDetails.sass';
import { useContext, useEffect, useState } from 'react';
import BackToStockList from '@components/BackToStockList';
import BlockSection from '@components/BlockSection';
import ErrorMsg from '@components/ErrorMsg';
import Loading from '@components/Loading';
import Portal from '@components/Portal';
import StockContext from '@contexts/StockContext';
import Summary from '@components/Summary';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GoldPriceChart from '@components/GoldPriceChart';
import useGoldPrice from '@hooks/useGoldPrice';

export default function GoldPrice() {
  // console.log('route: GoldPrice');
  const { token } = useContext(StockContext);
  const { data, error, stage } = useGoldPrice(token);
  const [range, setRange] = useState({ min: null, max: null });

  useEffect(() => {
    if (data) {
      let min = null;
      let max = null;

      data.forEach(d => {
        const value = d.close;
        if (!max || value > max) {
          max = value;
        }
        if (!min || value < min) {
          min = value;
        }
      });

      setRange({ min, max });
    }
  }, [data]);

  return (
    <Portal>
      <BackToStockList to="/" title="Gold Price" />
      <div className="min-h-full pb-8 bg-gray-900">
        <div className="z-5 bg-primary sticky top-0 text-white">
          <Tabs
            value="PriceHistory"
            TabIndicatorProps={{ sx: { bgcolor: 'white' } }}
            textColor="inherit"
            aria-label="tabs for the stock details"
          >
            <Tab label="走勢" value="PriceHistory" sx={{ fontSize: 16 }} />
          </Tabs>
        </div>
        <div
          data-name="tab-panel"
          className="bg-gray-900 bg-gradient-to-b from-primary from-[60px] via-transparent via-[60px] pt-8 px-2"
        >
          <BlockSection className="text-center">
            {stage === 'fetching' && <Loading />}
            {data && (
              <>
                <Summary
                  currentDuration="1Y"
                  currentValue={data[data.length - 1].close}
                  startValue={data[0].close}
                  endDate={data[data.length - 1].date}
                  min={range.min}
                  max={range.max}
                />
                <GoldPriceChart history={data} />
              </>
            )}
            {error && <ErrorMsg>{error.message}</ErrorMsg>}
          </BlockSection>
        </div>
      </div>
    </Portal>
  );
}