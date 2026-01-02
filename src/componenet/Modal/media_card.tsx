import { Heart } from "lucide-react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

interface MediaCardProps {
  fileUrl: string;
  fileType: string;
  caption?: string;
  id: string; 
  onDelete: (id: string) => void;
}

const MediaCard = ({ fileUrl, fileType, caption, id, onDelete  }: MediaCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  console.log("MediaCard render:", id);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/media/delete/${id}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (data.success) {
        onDelete(id); // 🔥 removes image instantly
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-sm bg-white border rounded-xl shadow-sm overflow-hidden">
      <div className="w-full h-80 bg-white">
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
      </div>

      <div className="flex w-full">
        <div className="p-4 w-1/2">
          <button onClick={handleLike} className="flex items-center gap-2">
            <Heart
              size={24}
              className={`cursor-pointer ${
                liked ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
            <span className="text-sm font-medium">{likes} likes</span>
          </button>
        </div>

        <div className="flex justify-end p-4 w-1/2">
          <MdDelete
            className="text-red-600 w-6 h-6 cursor-pointer hover:text-red-800"
            onClick={handleDelete}
          />
        </div>
      </div>

      {caption && (
        <p className="text-sm p-2">{caption}</p>
      )}
    </div>
  );
};

export default MediaCard;
