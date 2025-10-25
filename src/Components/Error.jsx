import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="font-bold">
      <h1 className="text-black ">OOPs...</h1>
      <h1 className="font-bold">Some thing went Wrong </h1>
      <h1>{err.status} </h1>
      <h1>{err.statusText} </h1>
    </div>
  );
};

export default Error;
