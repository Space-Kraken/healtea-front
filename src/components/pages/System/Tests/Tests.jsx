import React from "react";
import { useParams } from "react-router-dom";

export default function Tests() {
  const { filter } = useParams();
  return (
    <div>
      {filter === "global" ? (
        <h1>Tests list</h1>
      ) : (
        <h1>Tests list for {filter}</h1>
      )}
    </div>
  );
}
