import React from "react";

export default function Home() {
  return (
    <div
      className="container mx-auto mt-5"
      style={{
        background: "#61C0BF",
      }}
    >
      <h1>Home page</h1>
      <section className="flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-medium tracking-wider text-gray-300">
            Consulta nuestro portal
          </p>
        </div>
      </section>
    </div>
  );
}
