import React from 'react'

function Values() {
  return (
    <div className="md:flex my-10 bg-gray-100">
      <div className="flex-1 ">
        <div className="md:px-32 p-5">
          <p className="text-lg font-light uppercase"></p>
          <p className="md:text-6xl text-3xl font-semibold py-5 text-sky-600">Send, Buy or Sell</p>
          <p className="md:text-lg text-gray-500 text-xs ">At VeqtaSquare, we simplify your cryptocurrency transactions with seamless and secure processes. Whether you want to send digital assets to family and friends, buy cryptocurrencies to expand your portfolio, or sell your holdings for quick liquidity, we've got you covered. Our platform provides a user-friendly interface, competitive rates, and reliable service to ensure your transactions are executed efficiently. We focus on BTC and USDT, the leading cryptocurrencies in the market, enabling you to handle significant transactions with ease and confidence. Trust VeqtaSquare to manage your crypto needs with professionalism and expertise.</p>
        </div>
      </div>
      <div className="md:flex-1">
        <img src="/images/coder.jpeg" width="100%" alt="" />
      </div>

    </div>
  )
}

export default Values