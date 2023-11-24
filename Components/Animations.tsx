import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export const AwardAnim = () => {
  return (
    <>
      <div className="h-[200px] w-[200px]">
        <DotLottiePlayer src="/award.lottie" autoplay loop>
          {" "}
        </DotLottiePlayer>
      </div>
    </>
  );
};

export const SmileAnim = () => {
  return (
    <>
      <div className="h-64 w-64 ">
        <DotLottiePlayer
          src="/SmileAnim"
          autoplay
          loop
          speed={0.6}
          intermission={2000}
          renderer="canvas"
        >
          <div className="text-white flex justify-center  font-medium">
            Scroll for more
          </div>
        </DotLottiePlayer>
      </div>
    </>
  );
};
