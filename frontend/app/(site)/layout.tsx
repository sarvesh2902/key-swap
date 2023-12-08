"use client";
import '@rainbow-me/rainbowkit/styles.css';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import {
  mainnet,
  polygon,
  polygonMumbai,
  scrollSepolia
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public'



const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon,polygonMumbai,scrollSepolia ],
  [
    alchemyProvider({ apiKey: "ihkPvefEF6f0ZbbWb-WGLxTkjqBZsIee" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'sihFileStorage',
  projectId:'e78fb839a3ce6d7bb4892b1f5a7d95c2',
  chains
});

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
})


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
      <WagmiConfig config={wagmiClient}>
    <RainbowKitProvider chains={chains}>
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
        </RainbowKitProvider>
    </WagmiConfig>
      </body>
    </html>
  );
}
