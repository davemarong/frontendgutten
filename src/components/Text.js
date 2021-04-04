import React from "react";
export default function Text({ data }) {
  const displayData = () => {
    if (data != undefined) {
      console.log(data);
      return <h1>{data}</h1>;
    }
  };
  return <div>Welcome, dear {displayData()}!</div>;
}
