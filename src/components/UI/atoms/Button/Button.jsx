import React from "react";

export default function Button(props) {
  const buttonMethod = () => {
    console.log(props.method);
    if (!props.method) return null;
    props.method();
  };

  return (
    <>
      <button
        onClick={buttonMethod}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {props.text}
      </button>
    </>
  );
}
