"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { useState } from "react";
import WalletNotConnected from "../WalletNotConnected";
import { SC_ADDRESS } from "../../constants";
import APIKeyMarketPlace from "../../contracts/APIKeyMarketPlace.json";
import axios from "axios";
import useEthersWalletClient from "../../hooks/useEthersWalletClient";

const NewApi = () => {
  const { data: signer } = useEthersWalletClient();
  console.log("Signer: ");
  console.log(signer);

  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [apiName, setApiName] = useState("");

  const { address, isConnecting, isDisconnected } = useAccount();

  const { data, isError, isLoading } = useContractRead({
    address: SC_ADDRESS,
    abi: APIKeyMarketPlace.abi,
    functionName: "getOrderNextNumber",
  });

  const { dataSell, isLoadingSell, isSuccess, write } = useContractWrite({
    address: SC_ADDRESS,
    abi: APIKeyMarketPlace.abi,
    functionName: "sellMessage",
  });

  useEffect(() => {
    axios
      .post("http://localhost:8787/send", {
        signer: signer,
        address: 0x03921b32271ad5e20485344ec0c715b8bfd9d732,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "duration":
        setDuration(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "apiName":
        setApiName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(data.toString())
    write({ args: [price, duration] });
  };

  if (isDisconnected || isConnecting)
    return (
      <div>
        <WalletNotConnected />
      </div>
    );

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Post a new API
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-11.5 flex">
                  <input
                    type="text"
                    id="apiName"
                    name="apiName"
                    value={apiName}
                    onChange={handleInputChange}
                    placeholder="API name"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  />
                </div>
                <div className="mb-11.5 flex">
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={handleInputChange}
                    placeholder="API price/hour"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  />
                </div>
                <div className="mb-11.5 flex">
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={duration}
                    onChange={handleInputChange}
                    placeholder="API duration"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  />
                </div>
                {/* <div className="mb-11.5 flex">
                  <textarea
                    placeholder="API description"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div> */}

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <button
                    type="submit"
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Submit
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewApi;
