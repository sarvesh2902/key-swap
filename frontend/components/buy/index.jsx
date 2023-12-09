"use client";
import React from "react";
import { useAccount, useContractRead } from "wagmi";
import WalletNotConnected from "../WalletNotConnected";
import { SC_ADDRESS } from "../../constants";
import APIKeyMarketPlace from "../../contracts/APIKeyMarketPlace.json";
import BuyCard from "./BuyCard";

const BuyComponent = () => {
  const { data, isError, isLoading } = useContractRead({
    address: SC_ADDRESS,
    abi: APIKeyMarketPlace.abi,
    functionName: "getOrderNextNumber",
  });

  console.log(data);
  const { address, isConnecting, isDisconnected } = useAccount();

  if (isDisconnected || isConnecting)
    return (
      <div className="items-center overflow-hidden body-font ml-50 mt-20 mb-40 text-gray-600">
        <WalletNotConnected />
      </div>
    );

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      {/* <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />
        </div>
        
      </div>

      <div className="flex flex-col items-center justify-center p-8 text-black">
        <h1 className="mb-16 mt-24 text-5xl font-bold">
          Pay for Web2 APIs using crypto
        </h1>
        <p className="text-center">
          You can buy API access at different rates given here. Once you click
          on buy, make sure the seller sends you the API key in under an hour
          through XMTP
        </p>
      </div> */}

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        {data ? (
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            <BuyCard numberOfOrders={Number(data)} />
          </div>
        ) : (
          "No Data found!!"
        )}
      </div>
    </section>
  );
};

export default BuyComponent;
