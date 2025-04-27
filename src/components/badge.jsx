import { FaStar } from "react-icons/fa";

export default function Badge({ type }) {
  const starColor = type === "premieres" ? "text-red-500" : "text-yellow-500";
  const text = type === "premieres" ? "Premieres" : "Today";

  return (
    <div
      className={`absolute top-2 left-11 bg-transparent text-white py-2 px-3 rounded-lg flex items-center gap-2 backdrop-blur-lg backdrop-opacity-90`}
    >
      <FaStar className={`${starColor}`} size={12} />
      <span className="text-xs">{text}</span>
    </div>
  );
}
