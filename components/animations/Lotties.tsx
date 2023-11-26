import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export const SmileLottie = () => {
  return (
    <>
      <div className="h-64 w-64">
        <DotLottiePlayer
          src="/smilelottie"
          autoplay
          loop
          speed={0.6}
          intermission={2000}
        >
          <div className="flex justify-center font-medium text-white">
            Scroll for more
          </div>
        </DotLottiePlayer>
      </div>
    </>
  );
};
