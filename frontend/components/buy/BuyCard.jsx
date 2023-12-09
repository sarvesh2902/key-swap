import React, { useEffect, useState } from "react";
import Order from "../Order";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useContractReads,
} from "wagmi";
import { SC_ADDRESS } from "../../constants";
import APIKeyMarketPlace from "../../contracts/APIKeyMarketPlace.json";

const apiUrl = "https://api.cloudnouns.com/v1/pfp";

function BuyCard({ numberOfOrders }) {
  const { address, isConnecting, isDisconnected } = useAccount();

  const { data, isError, isLoading } = useContractReads({
    contracts: Array.from({ length: numberOfOrders }, (_, i) => ({
      address: SC_ADDRESS,
      abi: APIKeyMarketPlace.abi,
      functionName: "getOrder",
      args: [i],
    })),
  });

  console.log(data);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    console.log(data);
    setApiData([]);
    const updatedApiData = [];
    for (let i = 0; i < data.length; i++) {
      console.log(Number(data[i].result.price.toString()));
      if (
        Number(data[i].result.price.toString()) == 0 ||
        data[i].result.buyer != "0x0000000000000000000000000000000000000000"
      ) {
        continue;
      }
      let api = {
        name: "OpenAI API",
        id: i,
        duration: Number(data[i].result.duration),
        cost: Number(data[i].result.price),
        publicAddress: data[i].result.seller,
        costPerHour:
          Number(data[i].result.price) / Number(data[i].result.duration),
        isSeller: 0,
        image: "https://api.cloudnouns.com/v1/pfp",
        isUpForSale: true,
      };
      updatedApiData.push(api);
    }
    console.log(updatedApiData);
    setApiData(updatedApiData);
    console.log(apiData);
  }, []);

  const pixelFontStyle = {
    fontFamily: "Public Pixel", // Use the font-family name defined in your CSS
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Centered and blended-in menu tab */}
      <div className="h-full w-full bg-opacity-70 p-4">
        <h1 className="mb-4 text-2xl font-bold text-black">Available APIs</h1>
        <div className="grid grid-cols-1 gap-4">
          {console.log(apiData)}
          {apiData.map((item, index) => (
            <Order
              key={index}
              id={item.id}
              name={item.name}
              duration={item.duration}
              cost={item.cost}
              publicAddress={item.publicAddress}
              costPerHour={item.costPerHour}
              isSeller={item.isSeller}
              image={apiUrl + "?name=" + item.publicAddress}
              isUpForSale={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyCard;
