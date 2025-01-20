import React from "react";
import loader from "@/assets/loader.gif";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loader} height={130} width={130} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
