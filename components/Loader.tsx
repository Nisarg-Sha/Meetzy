import React from "react";
import Image from "next/image";
const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle.svg"
        alt="loading-image"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
