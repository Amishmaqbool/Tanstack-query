import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header>
      <div className=" bg-gray-800  h-[100px]">
        <div className="container mx-auto text-white text-4xl text-center py-8">
          <p>
            TanStack
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 pl-1">
              Query
              <span className="text-white pl-1">Fetching</span>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};
