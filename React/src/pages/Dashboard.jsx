import React from 'react';
import Order from '../components/Order';
import WalletNotConnected from '../components/WalletNotConnected'
import ethers from 'ethers'
import { useAccount, useContractRead, useContractWrite, useContractReads } from 'wagmi';
import {SC_ADDRESS} from '../constants';
import APIKeyMarketPlace from '../contracts/APIKeyMarketPlace.json';
import { useEffect, useState } from 'react';
import DashboardComponent from '../components/DashBoardComponent';

const Dashboard = () => {
  const { address, isConnecting, isDisconnected } = useAccount()

  const { data, isError, isLoading } = useContractRead({
    address: SC_ADDRESS,
    abi:  APIKeyMarketPlace.abi,
    functionName: 'getOrderNextNumber',
  })


  if (isDisconnected || isConnecting) return (<div><WalletNotConnected/></div>)

  return (
    <div>
      <DashboardComponent
      numberOfOrders={Number(data)}
      />
    </div>
  );
}

export default Dashboard;
