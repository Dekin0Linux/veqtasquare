'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";

function Currency() {
    const [coinData,setCoinData] = useState()


    const getCryptoList = async () => {
        try {
          const { data } = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
          );
    
          if (data) {
            console.log(data);
            setCoinData(data);
          }
        } catch (err) {
          console.log("err");
        }
      };


      useEffect(() => {
        getCryptoList();
      }, []);

  return (
    <div className='pt-4 bg-black'>
        <Marquee 
    speed={90}
    autoFill={true}
    >
    {coinData?.map((coin, index) => {
          return (
            <div className="p-2 flex justify-between mb-10 gap-10">
              <div className="flex gap-4 items-center  w-full">
                <img src={coin.image} alt="" className="w-8 h-8" />
                <p className="text-gray-400">{coin.name}</p>
              </div>
              <p className="text-gray-600 flex-1 text-ellipsis overflow-hidden">
                {/* {formatCurrency(coin.current_price)} */}
              </p>
            </div>
          );
        })}
    </Marquee></div>
  )
}

export default Currency