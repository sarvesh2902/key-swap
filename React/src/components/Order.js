import React from 'react';
import XmtpHome from './XmtpHome';
  // Importing the XmtpHome component, assuming it's in the same directory
  // import PushHome from './PushHome';

import {SC_ADDRESS} from '../constants';
import APIKeyMarketPlace from '../contracts/APIKeyMarketPlace.json';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';

const Order = ({id, name, duration, cost, publicAddress, costPerHour, isSeller, image, isUpForSale }) => {

  const { dataBuy, isLoadingBuy, isSuccessBuy, write: buyWrite } = useContractWrite({
    address: SC_ADDRESS,
    abi: APIKeyMarketPlace.abi,
    functionName: 'buyMessage',
  })

  const { data: cancelData, isLoading: cancelIsLoading, isSuccess: cancelIsSuccess, write: cancelWrite } = useContractWrite({
    address: SC_ADDRESS,
    abi: APIKeyMarketPlace.abi,
    functionName: 'cancelOrder',
  })

  function formatAddress(address) {
    if (!address) return ""; // handle null or undefined
    if (address.length <= 10) return address; // if address is too short, just return it
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  const handleBuy = async () => {
    console.log(cost)
    buyWrite({args: [Number(id)],
      value: cost,
    });
  }

  const handleCancel = async () => {
    console.log(id)
    cancelWrite({
      args: [Number(id)]
    });
  }

  return (

<>
<div className="p-4 lg:w-1/2">
  <div className="relative h-full overflow-hidden rounded-3xl bg-blue-500 bg-opacity-75 px-8 pb-16  pt-16">

    <button className="mb-4 rounded bg-blue-800 px-2 py-0 font-bold text-white">
      Popular
    </button>
    <h1 className="title-font mb-3 text-xl font-medium text-gray-900 sm:text-2xl">
      {name}
    </h1>
    <p className="mb-3 leading-relaxed">Description</p>
    <p className="mt-2"><span className="font-bold text-gray-900">Public Address:</span> {formatAddress(publicAddress)}</p>
    <hr className="my-8 h-px border-0 bg-gray-100 dark:bg-gray-700"></hr>

<div className=" flex flex-col">
      <div className="inline-flex items-center gap-x-8 leading-none">
        <span className="flex flex-grow flex-col pl-4">
          <span className="text-s mb-1 tracking-widest text-gray-800">
            DURATION
          </span>
          <span className="title-font font-large font-semibold text-gray-900">
            {duration} hours
          </span>
        </span>

        <span className="flex flex-grow flex-col pl-4">
          <span className="text-s mb-1 tracking-widest text-gray-800">
            STATUS
          </span>
          <span className="title-font font-large font-semibold text-gray-900">
            Available
          </span>
        </span>
      </div>
      <div className="flex flex-col mt-2">
            <div className="flex">
            <div className="my-auto">
            <span className="text-s mb-1 tracking-widest text-gray-800">
            PRICE :
          </span>
          </div>
          <div className="flex">
                <p className="font-bold text-black text-3xl">{parseFloat(costPerHour.toFixed(4))}</p>
                <div className="my-auto mx-2">
                <p className="text-sm text-gray-600 mt-1">WEI/day</p>
                </div>
                </div>

            </div>

            <div className="mt-4">
                {isUpForSale ? (
                    <button onClick={handleBuy} className="bg-green-400 text-white py-2 px-4 rounded">
                        BUY
                    </button>
                ) : (
                    <button onClick={handleCancel} className="bg-red-400 text-white py-2 px-4 rounded">
                        CANCEL Transaction
                    </button>
                )}
            </div>
        </div>


    </div>

    <div className="flex justify-between items-start text-blue-800 mt-4">
        <div>
            <p><span className="font-bold">Duration:</span> {duration}</p>
            {!isUpForSale && <p><span className="font-bold">Cost:</span> {isSeller ? `${cost} collected` : `${cost} spent`}</p>}
        </div>
    </div>

    {!isUpForSale && <XmtpHome PEER_ADDRESS={publicAddress} />}
  </div>
</div>



</>
  );
}

export default Order;
