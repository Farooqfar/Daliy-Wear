"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import { useState } from "react";

export default function page() {
  const [addCart, setaddcart] = useState(false);
  return (
    <>
      <main className="w-full min-h-screen overflow-x-hidden  flex flex-col items-center p-5">
        <section className="w-full  flex bg-linear-to-tl to-black from-gray-800 p-5 max-md:flex-col max-md:gap-10">
          <div className="w-[50%] h-full  flex flex-col justify-center gap-10 max-md:w-full">
            <h1 className="text-white">Premium Restaurant</h1>
            <h1 className="text-white font-bold text-9xl max-lg:text-7xl max-sm:text-6xl">
              Dedelay&apos;s
              <br />
              Oven
            </h1>

            <p className="text-white">
              Best hot and fresh pizzas served in our restaurant.
            </p>
            <button className="w-28 p-2 bg-[#E1380A] text-white hover:bg-[#E1380A] transition-all duration-200  cursor-pointer hover:scale-105">
              Learn More
            </button>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center max-md:w-full max-md:h-full">
            <Image
              src="/pizaa.png"
              alt="banner"
              width={100}
              height={100}
              className="w-[80%]"
            />
          </div>
        </section>
        <section className="w-full  bg-gray-800 flex p-5 max-md:flex-col max-md:h-auto max-md:gap-10">
          <div className="w-[50%] h-full flex  flex-col justify-around max-md:w-full max-md:h-full max-md:gap-1">
            <h1 className="text-5xl uppercase font-bold max-lg:text-4xl max-sm:text-2xl">
              orange benefit
            </h1>
            <div className="flex gap-8">
              <div>
                <Image
                  src="/p3.png"
                  alt="orange"
                  width={100}
                  height={100}
                  className="w-48"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-3">
                <p>
                  Rich in Vitamin C to boost immunity and keep you energized
                  every day
                </p>
                <Link href="#" className="w-28 bg-[#E1380A] p-2">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center max-md:w-full max-md:h-full">
            <Image
              src="/p2.png"
              alt="orange"
              width={100}
              height={100}
              className="w-100 max-md:w-52"
            />
          </div>
        </section>
        <section className="w-full flex justify-center items-center gap-3 flex-wrap mt-5">
          <Cards />
        </section>
        <section className="w-full flex justify-center items-center gap-3 flex-wrap mt-5">
          <h1 className="text-6xl uppercase text-[#E1380A] font-bold">
            Offers
          </h1>
          <div className="w-full flex justify-center items-center gap-3 flex-wrap">
            <Cards />
          </div>
        </section>
        <section
          className={`absolute w-[90%] min-h-100 top-32 bg-[#E1380A] p-5 overflow-hidden ${
            addCart
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-5 pointer-events-none"
          } transition-all duration-300`}
        >
          <Cart />
        </section>
      </main>
    </>
  );
}
