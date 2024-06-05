'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const CryptoChart = ({ coinId }) => {
  const [series, setSeries] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null); 
  const [options, setOptions] = useState({
    chart: {
      type: 'area',
      height: 350,
    },
    title: {
      text: '24 Hour Market Price',
      align: 'left',

    },
    xaxis: {
      type: 'datetime',
      

    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return `$${value.toFixed(2)}`;
        },
        show:false
      }
    },
    stroke: {
        width: 2
    },
    dataLabels: {
        enabled: false
      }
  });


  function formatNumber(number) {
    //convert number to currenct
    return new Intl.NumberFormat().format(number)
  }

  useEffect(() => {
    console.log(coinId);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
          {
            params: {
              vs_currency: 'usd',
              days: '1',
            },
          }
        );

        const prices = response.data.prices.map(price => ({
          x: new Date(price[0]),
          y: price[1]
        }));

        const latestPrice = response.data.prices[response.data.prices.length - 1][1];
        setCurrentPrice(latestPrice);

        console.log(response.data);

        setSeries([{ name: 'Price', data: prices }]);
      } catch (error) {
        console.error('Error fetching data from CoinGecko', error);
      }
    };

    fetchData();
  }, [coinId]);

//   grid grid-cols-3 container mx-auto gap-3

  return (
    <div className=' grid md:grid-cols-3 container mx-auto gap-3'>
        <div className='flex-1 p-10 col-span-2 bg-white shadow rounded-md'>
            <p className='capitalize text-end'>{coinId}</p>
            <p className='md:text-3xl font-semibold text-green-500'>$ {formatNumber(currentPrice)}</p>
            <Chart options={options} series={series} type="area" height={400} width={'100%'} />
        </div>

        <div className=' bg-white p-10 shadow rounded-md'>
            <div>
                <h4 className='text-xl font-semibold'>FLASH Live Price Summary</h4>
                <p className='text-gray-500 pt-5'>As of Jun 5, 2024, the global cryptocurrency market cap is $-- with a 0.00% change in the last 24 hours. Today's price of FLASH is $0.00377629, with a 24-hour trading volume of $177.12. FLASH is +1.30% in the last 24 hours, with a circulating supply of -- FLASH coins and a maximum supply of 10.00M FLASH coins. FLASH ranks -- by market cap. It has a 24H high of $0.00378974 recorded on Jun 5, 2024, and its 24H low so far is $0.00372773, recorded on Jun 5, 2024.</p>
            </div>

            <div className='my-3'>
                <h4 className='text-xl font-semibold'>What Is the Highest Price of FLASH?</h4>
                <p className='text-gray-500 pt-5'>FLASH has an all-time high (ATH) of $0.052746 , recorded on Feb 1, 2024.</p>
            </div>

            <div>
                <h4 className='text-xl font-semibold'>What Is the Lowest Price of FLASH?</h4>
                <p className='text-gray-500 pt-5'>FLASH has an all-time low (ATL) of $0.00344167, recorded on May 19, 2024.</p>
            </div>
        </div>
        
    </div>
  );
};

export default CryptoChart;
