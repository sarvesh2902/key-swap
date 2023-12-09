import React from "react";

const WalletNotConnected = () => {
  const pixelFontStyle = {
    fontFamily: "PixelFont", // Use the font-family name defined in your CSS
  };
  return (
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
      <div className="rounded-lg bg-transparent p-6 shadow-xl">
        <h2
          className="mb-4 text-2xl font-semibold text-black"
          style={pixelFontStyle}
        >
          Connect Your Wallet
        </h2>
        <p className="text-black" style={pixelFontStyle}>
          To access the features of this platform, please connect your
          cryptocurrency wallet.
        </p>
      </div>
    </div>
  );
};

export default WalletNotConnected;
