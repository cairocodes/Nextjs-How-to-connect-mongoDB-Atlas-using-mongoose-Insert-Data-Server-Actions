"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
 
export default function AddProduct() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
 
    const router = useRouter();
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        if (!name || !image) {
            alert("Name and image are required.");
            return;
        }
 
        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, image, price, category }),
            });
 
            if (res.ok) {
                router.push("/products");
            } else {
                throw new Error("Failed to create a Product");
            }
        } catch (error) {
            console.log(error);
        }
    };
 
    return (
        <div className="max-w-screen-lg mx-auto py-14">
        <h1 className="text-4xl font-bold">Nextjs How to connect mongoDB Atlas using mongoose | Insert Data Server Actions</h1>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Product Name"
            />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
            <input
                onChange={(e) => setImage(e.target.value)}
                value={image}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="/images/1.jpg"
                defaultValue="/images/1.jpg"
            />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                placeholder="1"
                defaultValue="1"
            />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
            <input
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Product Category"
            />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
        </form>
        </div>
    );
}