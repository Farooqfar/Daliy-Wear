import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Cards({ name, des, price, image, sale }) {
  const [sales, setSales] = useState(true);
  return (
    <>
      <section className="relative w-80 h-80 bg-gray-900 p-5 m-5 rounded max-md:w-full max-md:m-0">
        {sale && (
          <div className="absolute bg-red-600 top-0 right-0 w-10 h-10 rounded-b-2xl text-center">
            sale
          </div>
        )}

        <div className="w-full h-44 flex justify-center items-center">
          {image && (
            <Image
              src={image}
              alt={"product"}
              width={100}
              height={100}
              className="rounded-xl w-full h-full"
            />
          )}
        </div>
        <div className="w-full h-auto">
          <h1 className="text-3xl">{name}</h1>
          <p className="text-[#E1380A]">{price} PKR</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="#"
            className="block w-full text-center rounded p-1 bg-amber-600 hover:bg-amber-700 transition-all duration-300 ease-linear mt-3"
          >
            Add to cart
          </Link>
          <Link
            href={`user/order/`}
            className="block w-full text-center rounded p-1 bg-[#E1380A] hover:bg-red-700 transition-all duration-300 ease-out mt-3"
          >
            Order Now
          </Link>
        </div>
      </section>
    </>
  );
}
