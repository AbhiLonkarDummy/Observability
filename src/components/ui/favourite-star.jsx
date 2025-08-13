import { Star } from "lucide-react";
import { useState } from "react";
export default function FavoriteStar() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className="rounded-full hover:bg-gray-100 transition"
    >
      <Star
        className={`h-6 w-6 transition-colors duration-200 ${
          isFavorite ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
        }`}
      />
    </button>
  );
}
