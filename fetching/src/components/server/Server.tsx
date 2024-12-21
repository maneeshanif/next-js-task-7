import React from "react";
import Link from "next/link";
interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Server = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const responseData: Book[] = await response.json();
  return (
    <section className="bg-primary h-full md:h-screen  flex justify-between items-center flex-col max-w-full">
      <h1 className="text-myorange text-6xl">Server</h1>
      <Link href={"/"}>Back to Home 🏠</Link>
      <div className=" h-[90%] md:h-full  md:w-[90%] bg-secondary grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 items-center justify-center lg:gap-6  p-2 md:p-4">
        {responseData.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col p-4 h-[160px] w-[400px] bg-white justify-around"
          >
            <h1 className="text-myorange text-2xl">{item.name}</h1>
            <p className="text-gray-600 text-lg">type:{item.type}</p>
            <p
              className={`text-black text-lg ${
                item.available ? "text-green" : "text-red"
              }`}
            >
              {item.available ? "Available" : "Not Available"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Server;
