import React from "react";

let Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon",
      description: "Hey there, its an Amazon basic services card",
      stock: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Flipkart",
      description: "Hey there, its an Flipkart basic services card",
      stock: false
    },
    {
      image:
        "https://images.unsplash.com/photo-1598972428564-8dbf76afc2ae?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description: "Hey there, its an Apple basic services card",
      stock: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Samsung",
      description: "Hey there, its an Samsung basic services card",
      stock: false
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center flex-wrap gap-12">
      {data.map((elem, idx) => (
        <div key={idx} className="w-60 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300 ">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt={elem.name}
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold text-2xl">{elem.name}</h2>
            <p className="text-md mt-5">{elem.description}</p>
            <h3 className={` ${elem.stock ? "bg-yellow-500" : "bg-red-500"} w-fit px-[6px] py-[2px] rounded-md text-md text-white mt-4`}>{elem.stock ? "In Stock" : "Out of Stock"}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
