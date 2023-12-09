"use client";
// import "@rainbow-me/rainbowkit/styles.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { mainnet, polygon, polygonMumbai, scrollSepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Button, Web3Modal } from "@web3modal/react";
import {
  DynamicWidget,
  useDynamicContext,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum-all";

const chains = [scrollSepolia]; // -----CHANGE-----
const projectId = "02d2c608e74734322e276800f3e43483"; // -----HIDE-----

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
const apiUrl = "https://api.cloudnouns.com/v1/pfp";

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [mainnet, polygon,polygonMumbai,scrollSepolia ],
//   [
//     alchemyProvider({ apiKey: "ihkPvefEF6f0ZbbWb-WGLxTkjqBZsIee" }),
//     publicProvider()
//   ]
// );

// const { connectors } = getDefaultWallets({
//   appName: 'sihFileStorage',
//   projectId:'e78fb839a3ce6d7bb4892b1f5a7d95c2',
//   chains
// });

// const wagmiClient = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
//   webSocketPublicClient
// })

const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <WagmiConfig config={wagmiConfig}>
          {/* <WagmiConfig config={wagmiClient}> */}
          {/* <RainbowKitProvider chains={chains}> */}
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
          >
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
          {/* </RainbowKitProvider> */}
        </WagmiConfig>
      </body>
    </html>
  );
}
