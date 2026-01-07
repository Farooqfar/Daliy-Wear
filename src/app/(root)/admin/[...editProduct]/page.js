"use client";
import { api } from "@/app/lib/axios";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const params = useSearchParams();
  const id = params.get("id");
  console.log(id);
  const [edit, setEdit] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    sale: false,
  });
  const handleValue = (e) => {
    const { name, value, type, checked } = e.target;
    setEdit((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const fetch_data_from_id = async () => {
    const { data } = await api.post("/editProduct", { id });
    setEdit({
      id: id,
      name: data.data[0].name,
      description: data.data[0].description,
      price: data.data[0].price,
      sale: data.data[0].sale,
    });
    console.log(edit.name);
  };
  useEffect(() => {
    if (id) {
      fetch_data_from_id();
      setEdit((prev) => ({ ...prev, id }));
    }
  }, [id]);

  const handleForm = async (e) => {
    e.preventDefault();

    const send_data = await api.put("/editProduct", edit);
    console.log(edit.id);
  };
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <form
          onSubmit={handleForm}
          className="w-90 flex flex-col gap-2 border p-4 rounded max-md:w-full"
        >
          <div>
            <h1>Name</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border w-full caret-amber-700 p-1 font-mono"
              value={edit.name}
              onChange={handleValue}
            />
          </div>
          <div>
            <h1>Description</h1>
            <input
              type="text"
              placeholder="Name"
              name="description"
              className="border w-full caret-amber-700 p-1 font-mono"
              value={edit.description}
              onChange={handleValue}
            />
          </div>
          <div>
            <h1>Price</h1>
            <input
              type="number"
              placeholder="Name"
              name="price"
              className="border w-full caret-amber-700 p-1 font-mono"
              value={edit.price}
              onChange={handleValue}
            />
          </div>
          <div>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-amber-500"
                name="sale"
                value={edit.sale}
                onChange={handleValue}
              />
              <span className="text-gray-600">Sale</span>
            </label>
          </div>
          <div>
            <button className="bg-amber-600 w-full hover:cursor-pointer">
              Edit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
