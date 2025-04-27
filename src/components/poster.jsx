// Poster.js
import Badge from "./badge";

export default function Poster({ image, name, type }) {
  return (
    <div className="flex flex-col items-center">
      <div className="poster w-[200px] h-[300px] overflow-hidden rounded-lg relative">
        {/* Adicionando as badges */}
        <Badge type={type} />
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Nome do filme fora do poster, abaixo dele */}
      <p
        className={`mt-2 text-center text-xl font-bold ${
          type === "premieres" ? "text-red-500" : "text-white"
        }`}
      >
        {name}
      </p>
    </div>
  );
}
