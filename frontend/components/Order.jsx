import React from "react";
// import XmtpHome from "./XmtpHome"; // Importing the XmtpHome component, assuming it's in the same directory
import { SC_ADDRESS } from "../constants";
import APIKeyMarketPlace from "../contracts/APIKeyMarketPlace.json";
import { useAccount, useContractRead, useContractWrite } from "wagmi";

const Order = ({
  id,
  name,
  duration,
  cost,
  publicAddress,
  costPerHour,
  isSeller,
  image,
  isUpForSale,
}) => {
  const {
    dataBuy,
    isLoadingBuy,
    isSuccessBuy,
    write: buyWrite,
  } = useContractWrite({
    address: SC_ADDRESS,
    abi: APIKeyMarketPlace.abi,
    functionName: "buyMessage",
  });

  const {
    data: cancelData,
    isLoading: cancelIsLoading,
    isSuccess: cancelIsSuccess,
    write: cancelWrite,
  } = useContractWrite({
    address: SC_ADDRESS,
    abi: APIKeyMarketPlace.abi,
    functionName: "cancelOrder",
  });

  function formatAddress(address) {
    if (!address) return ""; // handle null or undefined
    if (address.length <= 10) return address; // if address is too short, just return it
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  const handleBuy = async () => {
    console.log(cost);
    buyWrite({ args: [Number(id)], value: cost });
  };

  const handleCancel = async () => {
    console.log(id);
    cancelWrite({
      args: [Number(id)],
    });
  };

  return (
    <div className=" w-full rounded-lg border bg-gradient-to-r from-blue-200 to-blue-300 p-4 shadow-md">
      <div className="mb-4 flex items-start justify-between">
        {image && (
          <img
            src={image}
            alt="Profile Image"
            className="mr-4 h-20 w-20 rounded-full"
          />
        )}
        <div className="flex-1 text-blue-800">
          <p className="text-xl font-bold">{name}</p>
          <p className="mt-2">
            <span className="font-bold">Public Address:</span>{" "}
            {formatAddress(publicAddress)}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-right">
            <p className="text-6xl font-bold text-black">
              {parseFloat(costPerHour.toFixed(4))}
            </p>
            <p className="mt-1 text-sm text-gray-600">WEI/day</p>
          </div>
          <div className="mt-4">
            {isUpForSale ? (
              <button
                onClick={handleBuy}
                className="rounded bg-green-400 px-4 py-2 text-white"
              >
                BUY
              </button>
            ) : (
              <button
                onClick={handleCancel}
                className="rounded bg-red-400 px-4 py-2 text-white"
              >
                CANCEL Transaction
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-start justify-between text-blue-800">
        <div>
          <p>
            <span className="font-bold">Duration:</span> {duration}
          </p>
          {!isUpForSale && (
            <p>
              <span className="font-bold">Cost:</span>{" "}
              {isSeller ? `${cost} collected` : `${cost} spent`}
            </p>
          )}
        </div>
      </div>
      {/* Display XmtpHome component if not up for sale */}
      {!isUpForSale && <XmtpHome PEER_ADDRESS={publicAddress} />}
    </div>
  );
};

export default Order;
