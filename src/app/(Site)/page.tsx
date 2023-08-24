import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <div className=" flex flex-col min-h-full justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-full">
        <Image
          alt="Logo"
          height="80"
          width="80"
          className="mx-auto"
          src="/img/logo.svg"
        ></Image>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {/* Form */}
    </div>
  );
}
