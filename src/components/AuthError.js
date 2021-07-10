import React from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const AuthError = () => {
  return (
    <div className="col-span-5" key={uuid}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl font-bold text-center mb-8">
          you need to login first to access this page
        </h1>
        <Link
          className="inline-block py-2 px-4 rounded-lg bg-blue-600 text-center text-white capitalize font-bold"
          to="/"
        >
          click here to login
        </Link>
      </div>
    </div>
  );
};

export default AuthError;
