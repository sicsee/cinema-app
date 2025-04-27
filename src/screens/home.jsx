import { FaChevronDown } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Poster from "../components/poster";

const posters = [
  { image: "/images/poster1.png", name: "Avengers EndGame", type: "premieres" },
  { image: "/images/poster2.png", name: "Glass", type: "today" },
  { image: "/images/poster3.png", name: "Toy Story 4", type: "today" },
  { image: "/images/poster4.png", name: "John Wick 3", type: "premieres" },
  { image: "/images/poster5.png", name: "Joker", type: "today" },
  { image: "/images/poster6.png", name: "Star Wars", type: "premieres" },
];

export default function Home() {
  const [activeButton, setActiveButton] = useState("services");

  return (
    <main className="bg-bg mt-25 space-y-8">
      <section
        id="top"
        className="flex items-center w-full justify-between mt-10 px-5"
      >
        <button className="flex items-center gap-2 px-4 py-1 rounded-xl border-none bg-bg2 hover:bg-bg3 cursor-pointer transition-all ease-linear">
          <div className="flex flex-col w-fit text-left">
            <p className="text-xs text-imp-red font-medium">Choose cinema</p>
            <p className="font-lg font-extralight text-white">Medellín</p>
          </div>
          <div className="text-imp-red">
            <FaChevronDown size={20} />
          </div>
        </button>

        <div className="flex items-center gap-3">
          <button className="cursor-pointer w-[50px] h-[50px] bg-imp-red text-white flex items-center justify-center rounded-xl hover:bg-imp-red/40 transition-all ease-linear duration-75">
            <Link to="/">
              <FaMagnifyingGlass size={20} />
            </Link>
          </button>
          <button className="hover:opacity-70 cursor-pointer">
            <img src="/images/icon-home.png" alt="Icon Home" />
          </button>
        </div>
      </section>
      <section className="px-5 ">
        <div className="w-full bg-bg2 px-5 py-3 rounded-2xl flex items-center justify-between">
          <div className="flex flex-col text-white -space-y-1">
            <p className="font-light font-xl">Know the</p>
            <p className="font-light font-xl">promotions of</p>
            <p className="font-extrabold text-xl">Tuesdays & Monday</p>
          </div>
          <div>
            <button className="bg-imp-red p-3 rounded-xl text-white hover:bg-imp-red/40 cursor-pointer transition-all ease-linear">
              <FiArrowDownRight size={40} />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-between px-5">
        <button
          onClick={() => setActiveButton("services")}
          className={`${
            activeButton === "services"
              ? "bg-bg2 text-imp-red font-bold border-2 border-imp-red "
              : "bg-bg2 text-white"
          } text-xl py-4 px-10 rounded-2xl`}
        >
          Services
        </button>
        <button
          onClick={() => setActiveButton("theaters")}
          className={`${
            activeButton === "theaters"
              ? "bg-bg2 text-imp-red font-bold border-2 border-imp-red "
              : "bg-bg2 text-white"
          } text-xl py-4 px-10 rounded-2xl`}
        >
          Theaters
        </button>
      </section>
      <section
        id="filmes"
        className="flex gap-8 overflow-hidden overflow-x-auto w-full pl-5 scrollbar-hidden"
      >
        {posters.map((poster, index) => (
          <Poster
            key={index}
            image={poster.image}
            name={poster.name}
            type={poster.type}
          />
        ))}
      </section>
    </main>
  );
}
