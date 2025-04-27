import { TfiVideoClapper } from "react-icons/tfi";
import { TbCalendarTime } from "react-icons/tb";
import { PiHamburgerDuotone } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Footer() {
  const location = useLocation(); // Obtém a URL da página atual

  // Função para verificar se o botão está ativo com base na rota
  const isActive = (path) => location.pathname === path;

  return (
    <footer className="w-full px-5 fixed bottom-0 left-0 items-center flex justify-between bg-bg">
      <Link to="/">
        <button
          className={`${
            isActive("/") ? "text-imp-red" : "text-bg3"
          } btn-footer cursor-pointer`}
        >
          <TfiVideoClapper size={35} />
          Billboard
          {isActive("/") && <div className="linha-footer"></div>}
        </button>
      </Link>

      <Link to="/coming">
        <button
          className={`${
            isActive("/coming") ? "text-imp-red" : "text-bg3"
          } btn-footer cursor-pointer`}
        >
          <TbCalendarTime size={35} />
          Coming Soon
          {isActive("/coming") && <div className="linha-footer"></div>}
        </button>
      </Link>

      <Link to="/food">
        <button
          className={`${
            isActive("/food") ? "text-imp-red" : "text-bg3"
          } btn-footer cursor-pointer`}
        >
          <PiHamburgerDuotone size={35} />
          Food
          {isActive("/food") && <div className="linha-footer"></div>}
        </button>
      </Link>

      <Link to="/profile">
        <button
          className={`${
            isActive("/profile") ? "text-imp-red" : "text-bg3"
          } btn-footer cursor-pointer`}
        >
          <IoPerson size={35} />
          Profile
          {isActive("/profile") && <div className="linha-footer"></div>}
        </button>
      </Link>
    </footer>
  );
}
