// import { Heart } from "lucide-react";
import { MdDelete } from "react-icons/md";
// import { useFavorites } from "../../context/FavoriteContext";

interface MediaCardProps {
  fileUrl: string;
  fileType: string;
  caption?: string;
  id: string;
  onDelete: (id: string) => void;
}

const MediaCard = ({ fileUrl, fileType, caption, id, onDelete }: MediaCardProps) => {
  // const { favorites, toggleFavourite } = useFavorites();
  // const isFav = favorites.includes(id);

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/media/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        onDelete(id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-sm bg-white border rounded-xl shadow-sm overflow-hidden">

      {/* MEDIA */}
      <div className="w-full h-80 bg-white relative">
        {fileType.startsWith("video") ? (
          <video
            src={`http://localhost:5000${fileUrl}`}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={`http://localhost:5000${fileUrl}`}
            alt="media"
            className="w-full h-full object-cover"
          />
        )}

        {/* FAVORITE BUTTON */}
        {/* <button
          onClick={() => toggleFavourite(id)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <Heart
            size={22}
            className={
              isFav
                ? "fill-red-500 text-red-500"
                : "text-gray-600"
            }
          />
        </button> */}
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center p-3">
        <p className="text-sm text-gray-700 truncate">
          {caption}
        </p>

        <MdDelete
          className="text-red-600 w-6 h-6 cursor-pointer hover:text-red-800"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default MediaCard;
