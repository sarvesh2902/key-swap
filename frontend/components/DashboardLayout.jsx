"use client";
import React from "react";
import WalletNotConnected from "../components/WalletNotConnected";
import { useAccount, useContractRead } from "wagmi";
import { SC_ADDRESS } from "../constants";
import DashboardComponent from "../components/DashBoardComponent";
import APIKeyMarketPlace from "../contracts/APIKeyMarketPlace.json";

const DashboardLayout = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const { data, isError, isLoading } = useContractRead({
    address: SC_ADDRESS,
    abi: APIKeyMarketPlace.abi,
    functionName: "getOrderNextNumber",
  });

  if (isDisconnected || isConnecting)
    return (
      <div>
        <WalletNotConnected />
      </div>
    );

  return (
    <div>
      <DashboardComponent numberOfOrders={Number(data)} />
    </div>
  );
};

export default DashboardLayout;
