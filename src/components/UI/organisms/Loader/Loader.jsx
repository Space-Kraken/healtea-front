import React from "react";
import Loading from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex flex-wrap justify-center content-center h-full w-full">
      <Loading
        type="Rings"
        color="#63BCC9"
        height={500}
        width={500}
        visible={true}
      />
    </div>
  );
}
