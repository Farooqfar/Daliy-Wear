"use client";
import Admin_Nav from "@/app/components/Admin_Nav";
import { api } from "@/app/lib/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function page() {
  const [products, setProdcuts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let data = await api.get("/addProduct");
      setProdcuts(data.data.allproduct);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      let delete_products = await api.delete("/addProduct", {
        data: { id },
      });

      setProdcuts((prev) => prev.filter((prev) => prev._id !== id));
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Admin_Nav />
      <section className="w-full h-full">
        <div className="w-full flex justify-end items-center p-8">
          <Link href="addProduct" className="w-20 bg-amber-600">
            Add +
          </Link>
        </div>
        <div className="w-full flex justify-center items-center p-10">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-amber-600">
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Sale</th>
                <th>Active</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="mt-2">
              {products?.map((items, index) => {
                return (
                  <tr className="odd:bg-gray-800 text-center" key={index}>
                    <td className="p-2">1</td>
                    <td className="p-2">{items.name}</td>
                    <td className="p-2">{items.price}</td>
                    <td className="p-2">{items.sale ? "sale" : "regular"}</td>
                    <td className="p-2">
                      <button>deactive</button>
                    </td>
                    <td className="p-2">
                      <Link
                        href={`edit/?id=${items._id}`}
                        className="cursor-pointer text-blue-600 underline"
                      >
                        edit
                      </Link>
                    </td>
                    <td className="p-2 text-red-600 underline">
                      <button
                        className="text-black  bg-red-600 text-sm p-1 rounded hover:scale-90 transition-all duration-200 hover:cursor-pointer"
                        onClick={() => handleDelete(items._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
