import { FaChevronDown } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Coming() {
  return (
    <main className="mt-20 space-y-5">
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
          <Link to="/">
            <button className="cursor-pointer w-[50px] h-[50px] bg-imp-red text-white flex items-center justify-center rounded-xl hover:bg-imp-red/40 transition-all ease-linear duration-75">
              <FaMagnifyingGlass size={20} />
            </button>
          </Link>
          <button className="hover:opacity-70 cursor-pointer">
            <img src="/images/icon-home.png" alt="Icon Home" />
          </button>
        </div>
      </section>
    </main>
  );
}
