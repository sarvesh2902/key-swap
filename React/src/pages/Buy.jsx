import React from 'react'
import { useAccount, useContractRead } from 'wagmi'
import WalletNotConnected from '../components/WalletNotConnected'
import BuyComponent from '../components/BuyComponent'
import {SC_ADDRESS} from '../constants';
import APIKeyMarketPlace from '../contracts/APIKeyMarketPlace.json';

function Buy() {
  const { data, isError, isLoading } = useContractRead({
    address: SC_ADDRESS,
    abi:  APIKeyMarketPlace.abi,
    functionName: 'getOrderNextNumber',
  })

  console.log(data)
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isDisconnected || isConnecting) return (<div><WalletNotConnected/></div>)

  return (
    <>
      <div className="flex flex-col justify-center items-center text-black p-8">
        <h1 className="text-5xl font-bold mt-24 mb-16">Pay for Web APIs using crypto</h1>
        <p className="text-center">You can buy API access at different rates given here. Once you click on buy, make sure the seller sends you the API key in under an hour through XMTP</p>
      </div>

     {data ?

      <BuyComponent
      numberOfOrders={Number(data)}
      />
      : " No Data found!!"
    }
     </>
  )
}

export default Buy