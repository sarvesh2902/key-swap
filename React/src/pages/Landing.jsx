import React from 'react'
import Navbar from '../components/Navbar'
import FlickeringImage from '../components/FlickeringImage'
import Description from '../components/Description';
import Typewriter from 'typewriter-effect';

const apiUrl = "https://api.cloudnouns.com/v1/pfp";

function Landing() {
  const pixelFontStyle = {
    fontFamily: 'Public Pixel',
  };

  
  return (
    <>
      <div className="flex h-screen">
        {/* Left Side: Text and Buttons (2/3) */}
        <div className="w-2/3 p-4 pl-16 ml-16 flex flex-col items-center justify-center">
          <div className="mb-4">
          <h2 className="text-8xl text-black font-semibold mb-4">
          
  <span
    style={{
      display: 'inline-block',
      width: '1100px', // Adjust the width as needed
      overflow: 'hidden',
    }}
  >

    <Typewriter
      options={{
        strings: ['Enabling Crypto Payments\n for Web APIs'],
        autoStart: true,
        loop: true,
      }}
    />
  </span>
</h2>
            <p className="text-md text-black" style={pixelFontStyle}>Redefining the modern API experience.</p>
            <div className="mb-4">
              <p className="text-lg text-black" style={pixelFontStyle}> for Web2 APIs.</p>
              {/* <div className="mt-10">
              <a
                href="/buy"
                className="inline-block bg-black border border-black text-white text-2xl px-4 py-2 mr-4 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{ ...pixelFontStyle, marginLeft: 'auto' }}
              >
                BUY
              </a>
              <a
                href="/sell"
                className="inline-block bg-black border border-black text-white text-2xl px-4 py-2 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{ ...pixelFontStyle }}
              >
                SELL
              </a>

                            </div> */}
                          </div>
                        </div>
                      </div>


        {/* Right Side: Flickering Image (1/3) */}
        <div className="w-1/3 flex items-center justify-center ml-4">
          <div className="mt-8">
            {/* <FlickeringImage imageUrl={apiUrl} /> */}
            {/* <video className="h-full w-full rounded-lg" controls>
      <source src="https://res.cloudinary.com/dbqqvw3gf/video/upload/v1702135548/KeySwap_whumnw.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
    <div>
      <img
        src="https://res.cloudinary.com/dbqqvw3gf/image/upload/v1702175578/Untitled_design_2_q0u3ah.png"
        alt="Your Alt Text"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Landing